using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using WebApplicationJWT.Helpers;
using WebApplicationJWT.Identity;
using WebApplicationJWT.Models;
using WebApplicationJWT.Options;
using WebApplicationJWT.Services;
using Newtonsoft.Json;
using Microsoft.Extensions.Caching.Distributed;

namespace WebApplicationJWT.Controllers
{
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private readonly ImageService imageService;
        private readonly ApplicationDbContext context;
        private readonly UserManager<AppUser> userManager;
        private readonly IDistributedCache cache;
        private readonly AzureBlobOptions azureOptions;

        private readonly int postsPerPage = 12;

        public PostsController(
            ImageService saveImageService,
            ApplicationDbContext context,
            UserManager<AppUser> userManager,
            IOptions<AzureBlobOptions> azureOptions,
            IDistributedCache cache)
        {
            this.imageService = saveImageService;
            this.context = context;
            this.userManager = userManager;
            this.cache = cache;
            this.azureOptions = azureOptions.Value;
        }

        [HttpPost("upload")]
        [Authorize(Policy = "User")]
        public async Task<ActionResult> UploadImage([FromForm(Name = "file")] IFormFile file)
        {
            string username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await userManager.FindByNameAsync(username);
            if (user != null)
            {
                var isUploaded = false;

                var fileName = $"{DateTime.Now.ToString("HH-mm-ss-dd-MM-yyyy-")}{file.FileName}";
                if (StorageHelper.IsImage(file))
                {
                    if (file.Length > 0)
                    {
                        using (Stream stream = file.OpenReadStream())
                        {
                            isUploaded = await StorageHelper.UploadFileToStorage(stream, fileName, azureOptions);
                        }
                    }
                }
                else
                {
                    return new UnsupportedMediaTypeResult();
                }

                if (isUploaded)
                {
                    var filePath = $"https://{azureOptions.AccountName}.blob.core.windows.net/{azureOptions.ImageContainer}/{fileName}";
                    var thumbPath = $"https://{azureOptions.AccountName}.blob.core.windows.net/{azureOptions.ThumbnailContainer}/{fileName}";

                    context.Posts.Add(new Post
                    {
                        Text = "Image",
                        AppUserId = user.Id,
                        Date = DateTime.Now,
                        ImagePath = filePath,
                        ThumbnailPath = thumbPath
                    });
                    await context.SaveChangesAsync();

                    return Json(new { location = filePath });
                }

            }
            return BadRequest();
        }

        //[HttpPost("upload")]
        //[Authorize(Policy = "User")]
        //public async Task<ActionResult> UploadImage([FromForm(Name = "file")] IFormFile file)
        //{
        //    string username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        //    var user = await userManager.FindByNameAsync(username);
        //    if (user != null)
        //    {
        //        var fileName = imageService.SaveImage(file);
                
        //        context.Posts.Add(new Post
        //        {
        //            Title = "Image",
        //            AppUserId = user.Id,
        //            Date = DateTime.Now,
        //            ImagePath = fileName
        //        });
        //        await context.SaveChangesAsync();
                
        //        return Json(new { location = fileName });
        //    }
        //    return BadRequest();
        //}

        [HttpGet]
        public async Task<ActionResult> GetPosts(int page = 1)
        {
            page--;
            if (page == 0)
            {
                var cashedPosts = await cache.GetStringAsync("posts");
                if (cashedPosts == null)
                {
                    var posts = await context.Posts.OrderByDescending(x => x.Date).Skip(postsPerPage * page).Take(postsPerPage).ToListAsync();
                    if (posts != null)
                    {
                        var newCahse = JsonConvert.SerializeObject(posts);
                        await cache.SetStringAsync("posts", newCahse);
                        return Ok(posts);
                    }
                }
                else
                {
                    var posts = JsonConvert.DeserializeObject<List<Post>>(cashedPosts);
                    return Ok(posts);
                }
            }
            return NotFound();
        }

        [HttpGet("{id}")]
        public ActionResult GetPost(int id)
        {
            var post = context.Posts.FirstOrDefault(x => x.Id == id);
            if (post != null)
            {
                return Ok(post);
            }
            return NotFound();
        }

        [HttpGet("user/{username}")]
        public async Task<ActionResult> GetUserPosts(string username)
        {
            var user = await userManager.FindByNameAsync(username);
            if (user != null)
            {
                var posts = context.Posts.Where(x => x.AppUserId == user.Id).OrderByDescending(x => x.Date).ToList();
                return Ok(posts);
            }
            return BadRequest();
        }

        //[HttpDelete("{id}")]
        //[Authorize(Policy = "User")]
        //public async Task<ActionResult> DeletePost(int id)
        //{
        //    string username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        //    var user = await userManager.FindByNameAsync(username);
        //    var post = context.Posts.FirstOrDefault(x => x.Id == id);
        //    if (post != null && user != null && post.AppUserId == user.Id)
        //    {
        //        imageService.DeleteImage(post.ImagePath);
        //        context.Posts.Remove(post);
        //        await context.SaveChangesAsync();
        //        return NoContent();
        //    }
        //    return BadRequest();
        //}

        [HttpDelete("{id}")]
        [Authorize(Policy = "User")]
        public async Task<ActionResult> DeletePost(int id)
        {
            string username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await userManager.FindByNameAsync(username);
            var post = context.Posts.FirstOrDefault(x => x.Id == id);
            if (post != null && user != null && post.AppUserId == user.Id)
            {
                //imageService.DeleteImage(post.ImagePath);
                await StorageHelper.DeleteFileFromStorage(azureOptions, post.ImagePath.Split('/').Last());

                context.Posts.Remove(post);
                await context.SaveChangesAsync();
                return NoContent();
            }
            return BadRequest();
        }
    }
}