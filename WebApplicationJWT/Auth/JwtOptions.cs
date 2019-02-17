using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationJWT.Auth
{
    public class JwtOptions
    {
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public TimeSpan AccessValidFor { get; set; } = TimeSpan.FromMinutes(60);
        public TimeSpan RefreshValidFor { get; set; } = TimeSpan.FromDays(30);
        public SigningCredentials SigningCredentials { get; set; }
    }
}
