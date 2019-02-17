using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationJWT.Services
{
    public class ImageService
    {
        public string SaveImage(IFormFile Image)
        {
            if (Image != null)
            {
                var fileName = $"{DateTime.Now.ToString("HH-mm-ss-dd-MM-yyyy-")}{Image.FileName}";
                var fullName = $"{Directory.GetCurrentDirectory()}\\wwwroot\\content\\{fileName}";
                using (var fs = new FileStream(fullName, FileMode.Create))
                {
                    Image.CopyTo(fs);
                }
                return fileName;
            }
            return null;
        }

        public void DeleteImage(string path)
        {
            try
            {
                var fullName = $"{Directory.GetCurrentDirectory()}\\wwwroot\\content\\{path}";
                File.Delete(fullName);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
