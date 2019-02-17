using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApplicationJWT.Auth;
using WebApplicationJWT.Identity;
using WebApplicationJWT.Models;
using WebApplicationJWT.ViewModels;

namespace WebApplicationJWT.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private readonly IdentityDbContext context;
        private readonly IJwtFactory jwtFactory;
        private readonly JwtOptions jwtOptions;
        private readonly UserManager<AppUser> userManager;
        private static readonly HttpClient Client = new HttpClient();

        public AccountsController(
            UserManager<AppUser> userManager, 
            IJwtFactory jwtFactory,
            IOptions<JwtOptions> jwtOptions,
            IdentityDbContext context)
        {
            this.userManager = userManager;
            this.context = context;
            this.jwtFactory = jwtFactory;
            this.jwtOptions = jwtOptions.Value;
        }

        // POST api/accounts
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = new AppUser
            {
                Email = model.Username,
                UserName = model.Username,
                Name = model.Name,
                Surname = model.Surname
            };
            var result = await userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                foreach (var item in result.Errors)
                    ModelState.AddModelError(item.Code, item.Description);
                return BadRequest(ModelState);
            }

            await userManager.AddToRoleAsync(user, "User");

            return Ok("Account created");
        }

        // POST api/accounts/facebook
        [HttpPost("facebook")]
        public async Task<IActionResult> LoginFacebookUser([FromBody] UserViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await userManager.FindByNameAsync(model.Username);

            if (user == null)
            {
                var newUser = new AppUser
                {
                    Email = model.Username,
                    UserName = model.Username,
                    Name = model.Name,
                    Surname = model.Surname,
                    FacebookId = model.FacebookId,
                };

                var result = await userManager.CreateAsync(newUser, Guid.NewGuid().ToString());

                if (!result.Succeeded)
                {
                    foreach (var item in result.Errors)
                        ModelState.AddModelError(item.Code, item.Description);
                    return BadRequest(ModelState);
                }

                await userManager.AddToRoleAsync(newUser, "User");

                return Ok("Account created");
            }
            else
            {
                var appAccessTokenResponse = await Client.GetStringAsync($"https://graph.facebook.com/oauth/access_token?client_id=241649093381428&client_secret=feec026a9ac9d57e65c407c10752b262&grant_type=client_credentials");
                var appAccessToken = JsonConvert.DeserializeObject<FacebookAppAccessToken>(appAccessTokenResponse);

                var userAccessTokenValidationResponse = await Client.GetStringAsync($"https://graph.facebook.com/debug_token?input_token={model.FacebookAuthToken}&access_token={appAccessToken.AccessToken}");
                var userAccessTokenValidation = JsonConvert.DeserializeObject<FacebookUserAccessTokenValidation>(userAccessTokenValidationResponse);

                if (!userAccessTokenValidation.Data.IsValid)
                {
                    ModelState.AddModelError("login_failure", "Invalid facebook token.");
                    return BadRequest(ModelState);
                }

                var refreshToken = jwtFactory.GenerateRefreshToken();
                await AddRefreshToken(refreshToken, user.Id);

                var accessToken = await jwtFactory.GenerateAccessToken(user);

                return Ok(new { username = user.UserName, accessToken, refreshToken });
            }
        }

        // POST api/accounts/current
        [Authorize(Policy = "User")]
        [HttpGet("current")]
        public async Task<IActionResult> GetProfile()
        {
            string username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            var user = await userManager.FindByNameAsync(username); 
            if (user == null)
            {
                ModelState.AddModelError("account_error", "Invalid username");
                return BadRequest(ModelState);
            }

            return Ok(new ProfileViewModel { Name = user.Name, Surname = user.Surname });
        }


        // POST api/accounts/{username}
        [Authorize(Policy = "User")]
        [HttpGet("{username}")]
        public async Task<IActionResult> GetProfile(string username)
        {
            var user = await userManager.FindByNameAsync(username);
            if (user == null)
            {
                ModelState.AddModelError("account_error", "Invalid username");
                return BadRequest(ModelState);
            }

            return Ok(new ProfileViewModel { Name = user.Name, Surname = user.Surname });
        }

        [Authorize(Policy = "User")]
        [HttpGet]
        public async Task<IActionResult> GetProfiles()
        {
            var users = new List<UserViewModel>();
            foreach (var item in userManager.Users)
            {
                users.Add(new UserViewModel
                {
                    Username = item.UserName,
                    Name = item.Name,
                    Surname = item.Surname
                });
            }
            return Ok(users);
        }

        private async Task AddRefreshToken(string refreshToken, string userId)
        {
            context.RefreshTokens.Add(new RefreshToken
            {
                Token = refreshToken.ToString(),
                Expires = DateTime.Now + jwtOptions.RefreshValidFor,
                AppUserId = userId,
            });
            await context.SaveChangesAsync();
        }
    }
}
