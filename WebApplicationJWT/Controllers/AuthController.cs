using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApplicationJWT.Auth;
using WebApplicationJWT.Identity;
using WebApplicationJWT.Models;
using WebApplicationJWT.ViewModels;

namespace WebApplicationJWT.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UserManager<AppUser> userManager;
        private readonly IJwtFactory jwtFactory;
        private readonly IdentityDbContext context;
        private readonly JwtOptions jwtOptions;

        public AuthController(
            UserManager<AppUser> userManager, 
            IJwtFactory jwtFactory, 
            IOptions<JwtOptions> jwtOptions,
            IdentityDbContext context)
        {
            this.userManager = userManager;
            this.jwtFactory = jwtFactory;
            this.context = context;
            this.jwtOptions = jwtOptions.Value;
        }

        // POST api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] CredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await userManager.FindByNameAsync(credentials.Username);
            if (user == null || !await userManager.CheckPasswordAsync(user, credentials.Password))
            {
                ModelState.AddModelError("login_failure", "Invalid username or password.");
                return BadRequest(ModelState);
            }

            var refreshToken = jwtFactory.GenerateRefreshToken();
            await AddRefreshToken(refreshToken, user.Id);

            var accessToken = await jwtFactory.GenerateAccessToken(user);

            return Ok(new { username = user.UserName, accessToken, refreshToken });
        }

        // POST api/auth/login
        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] CredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await userManager.FindByNameAsync(credentials.Username);
            if (user == null)
            {
                ModelState.AddModelError("refresh_failure", "Invalid username.");
                return BadRequest(ModelState);
            }

            var token = context.RefreshTokens.FirstOrDefault(x => x.Token == credentials.RefreshToken && x.AppUserId == user.Id);
            if (token == null)
            {
                ModelState.AddModelError("refresh_failure", "Invalid refresh token.");
                return BadRequest(ModelState);
            }
            if (token.Expires < DateTime.Now)
            {
                ModelState.AddModelError("refresh_failure", "Refresh token is expired");
                context.RefreshTokens.Remove(token);
                await context.SaveChangesAsync();
                return BadRequest(ModelState);
            }

            var refreshToken = jwtFactory.GenerateRefreshToken();
            await AddRefreshToken(refreshToken, user.Id);

            context.RefreshTokens.Remove(token);
            await context.SaveChangesAsync();

            var accessToken = await jwtFactory.GenerateAccessToken(user);

            return Ok(new { username = user.UserName, accessToken, refreshToken });
        }

        // POST api/auth/login
        [HttpPost("logout")]
        public async Task<IActionResult> Logout([FromBody] CredentialsViewModel credentials)
        {
            var user = await userManager.FindByNameAsync(credentials.Username);
            if (user == null)
            {
                ModelState.AddModelError("logout_failure", "Invalid username.");
                return BadRequest(ModelState);
            }

            var token = context.RefreshTokens.FirstOrDefault(x => x.Token == credentials.RefreshToken && x.AppUserId == user.Id);
            if (token != null)
            {
                context.RefreshTokens.Remove(token);
                await context.SaveChangesAsync();
            }

            return Ok();
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
