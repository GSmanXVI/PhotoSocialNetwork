using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApplicationJWT.Identity;

namespace WebApplicationJWT.Auth
{
    public interface IJwtFactory
    {
        Task<string> GenerateAccessToken(AppUser user);
        string GenerateRefreshToken();

    }
}
