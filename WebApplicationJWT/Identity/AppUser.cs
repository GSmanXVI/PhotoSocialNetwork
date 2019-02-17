using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationJWT.Identity
{
    public class AppUser : IdentityUser
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public long? FacebookId { get; set; }
        public string PictureUrl { get; set; }

        public IEnumerable<RefreshToken> RefreshTokens { get; set; }
    }
}
