using System;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using WebApplicationJWT.Auth;
using WebApplicationJWT.Models;
using Microsoft.AspNetCore.Identity;
using WebApplicationJWT.Identity;
using WebApplicationJWT.Hubs;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using WebApplicationJWT.Services;
using WebApplicationJWT.Options;

namespace WebApplicationJWT
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("ApplicationConnection")));

            services.AddDbContext<IdentityDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("IdentityConnection")));
            

            services
                .AddIdentity<AppUser, IdentityRole>()
                .AddEntityFrameworkStores<IdentityDbContext>()
                .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequiredLength = 6;
            });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("User", policy => policy.RequireClaim("rol"));
                options.AddPolicy("Admin", policy => policy.RequireClaim("rol", "Admin"));
            });


            var jwtOptions = Configuration.GetSection("JwtIssuerOptions");
            var securityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtOptions["SecretKey"]));
            services.Configure<JwtOptions>(options =>
            {
                options.Issuer = jwtOptions["Issuer"];
                options.Audience = jwtOptions["Audience"];
                options.AccessValidFor = TimeSpan.FromMinutes(5);
                options.RefreshValidFor = TimeSpan.FromDays(30);
                options.SigningCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            });

            var azureBlobOptions = Configuration.GetSection("AzureBlobOptions");
            services.Configure<AzureBlobOptions>(options =>
            {
                options.AccountName = azureBlobOptions["AccountName"];
                options.AccountKey = azureBlobOptions["AccountKey"];
                options.ImageContainer = azureBlobOptions["ImageContainer"];
                options.ThumbnailContainer = azureBlobOptions["ThumbnailContainer"];
            });

            services.AddScoped<IJwtFactory, JwtFactory>();
            services.AddScoped<ImageService>();

            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = jwtOptions["Issuer"],

                ValidateAudience = true,
                ValidAudience = jwtOptions["Audience"],

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = securityKey,

                RequireExpirationTime = false,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero
            };

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(configureOptions =>
            {
                configureOptions.ClaimsIssuer = jwtOptions["Issuer"];
                configureOptions.TokenValidationParameters = tokenValidationParameters;
                configureOptions.SaveToken = true;

                configureOptions.Events = new JwtBearerEvents
                {
                    OnMessageReceived = context =>
                    {
                        var accessToken = context.Request.Query["access_token"];

                        // If the request is for our hub...
                        var path = context.HttpContext.Request.Path;
                        if (!string.IsNullOrEmpty(accessToken) &&
                            (path.StartsWithSegments("/chathub")))
                        {
                            // Read the token out of the query string
                            context.Token = accessToken;
                        }
                        return Task.CompletedTask;
                    }
                };
            });

            services.AddCors(o => o.AddPolicy("CorsPolicy", builder => {
                builder
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
                .WithOrigins("http://localhost:4200");
            }));

            services.AddSignalR();

            services.AddSpaStaticFiles(config =>
            {
                config.RootPath = "App/dist";
            });

            //Redis Options
            var redisOptions = Configuration.GetSection("RedisOptions");
            services.AddDistributedRedisCache(options =>
            {
                options.Configuration = redisOptions["Configuration"];
                options.InstanceName = redisOptions["InstanceName"];
            });

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseHttpsRedirection();
            app.UseCors("CorsPolicy");

            app.UseSignalR(routes =>
            {
                routes.MapHub<ChatHub>("/chathub"); 
            });

            app.UseDeveloperExceptionPage();
            app.UseAuthentication();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseMvc();
            app.UseSpa(spa => 
            {
                spa.Options.SourcePath = "App";
                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
                //else
                //{
                //    spa.UseAngularCliServer(npmScript: "build");
                //}
            });

            IdentityDbInitializer.SeedData(app).Wait();
        }
    }
}