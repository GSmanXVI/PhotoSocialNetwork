using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationJWT.Identity
{
    public class IdentityDbInitializer
    {
        public static async Task SeedData(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var userManager = serviceScope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
                var roleManager = serviceScope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();

                if (!await roleManager.RoleExistsAsync("Admin"))
                {
                    await roleManager.CreateAsync(new IdentityRole { Name = "Admin" });
                }
                if (!await roleManager.RoleExistsAsync("User"))
                {
                    await roleManager.CreateAsync(new IdentityRole { Name = "User" });
                }

                if (await userManager.FindByNameAsync("skripnikov@itstep.org") == null)
                {
                    var user = new AppUser
                    {
                        UserName = "skripnikov@itstep.org",
                        Email = "skripnikov@itstep.org",
                        Name = "Hlib",
                        Surname = "Skrypnikov"
                    };
                    await userManager.CreateAsync(user, "admin123");
                    await userManager.AddToRoleAsync(user, "Admin");
                }
                if (await userManager.FindByNameAsync("musemuse67@gmail.com") == null)
                {
                    var user = new AppUser
                    {
                        UserName = "musemuse67@gmail.com",
                        Email = "musemuse67@gmail.com",
                        Name = "Alina",
                        Surname = "Vorobyova"
                    };
                    await userManager.CreateAsync(user, "qwerty");
                    await userManager.AddToRoleAsync(user, "User");
                }
            }
        }
    }
}
