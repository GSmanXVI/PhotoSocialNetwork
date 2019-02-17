using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using WebApplicationJWT.Identity;
using WebApplicationJWT.Models;

namespace WebApplicationJWT.Auth
{
    public class JwtFactory : IJwtFactory
    {
        private readonly JwtOptions jwtOptions;
        private readonly UserManager<AppUser> userManager;

        public JwtFactory(IOptions<JwtOptions> jwtOptions, UserManager<AppUser> userManager)
        {
            this.jwtOptions = jwtOptions.Value;
            this.userManager = userManager;
        }

        public async Task<string> GenerateAccessToken(AppUser user)
        {
            var issuedAt = DateTime.Now;
            var roles = await userManager.GetRolesAsync(user);

            var claims = new[]
            {
                 new Claim("id", user.Id),
                 new Claim("rol", roles[0]),
                 new Claim("sub", user.UserName),
                 new Claim("iat", ToUnixEpochDate(issuedAt).ToString(), ClaimValueTypes.Integer64),
            };

            var jwt = new JwtSecurityToken(
                issuer: jwtOptions.Issuer,
                audience: jwtOptions.Audience,
                claims: claims,
                notBefore: issuedAt,
                expires: issuedAt + jwtOptions.AccessValidFor,
                signingCredentials: jwtOptions.SigningCredentials);

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }

        public string GenerateRefreshToken()
        {
            return Guid.NewGuid().ToString();
        }

        private static long ToUnixEpochDate(DateTime date)
        {
            var offset = new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero);
            return (long)Math.Round((date.ToUniversalTime() - offset).TotalSeconds);
        }
    }
}
