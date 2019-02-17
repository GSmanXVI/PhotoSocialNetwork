using System;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Newtonsoft.Json.Linq;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using SixLabors.ImageSharp.Formats.Gif;
using SixLabors.ImageSharp.Formats.Jpeg;
using SixLabors.ImageSharp.Formats.Png;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;

namespace ThumbnailFunction
{
    public static class ThumbnailFunction
    {
        private static readonly string BLOB_STORAGE_CONNECTION_STRING = Environment.GetEnvironmentVariable("AzureWebJobsStorage");

        [FunctionName("ThumbnailFunction")]
        public static async Task Run([BlobTrigger("images/{name}", Connection = "")]Stream myBlob, string name, TraceWriter log)
        {
            log.Info($"C# Blob trigger function Processed blob\n Name:{name} \n Size: {myBlob.Length} Bytes");

            try
            {
                if (myBlob != null)
                {
                    var extension = Path.GetExtension(name);
                    var encoder = GetEncoder(extension);

                    if (encoder != null)
                    {
                        var thumbnailWidth = 300;
                        var thumbContainerName = "thumbnails";
                        var storageAccount = CloudStorageAccount.Parse("DefaultEndpointsProtocol=https;AccountName=photostoragestep;AccountKey=KbdhcsTrjXoDXMssaa7BHLMrCp/8DsbVxkshNrr8eI7awsX2HQngqofYYcL0/sITv1/IwlhGesWELYl5ca1uZg==;EndpointSuffix=core.windows.net");
                        var blobClient = storageAccount.CreateCloudBlobClient();
                        var container = blobClient.GetContainerReference(thumbContainerName);
                        var blockBlob = container.GetBlockBlobReference(name);

                        var buffer = new byte[myBlob.Length];
                        await myBlob.ReadAsync(buffer, 0, Convert.ToInt32(myBlob.Length));

                        using (var output = new MemoryStream())
                        {
                            using (Image<Rgba32> image = Image.Load(buffer))
                            {
                                var divisor = image.Width / thumbnailWidth;
                                var height = Convert.ToInt32(Math.Round((decimal)(image.Height / divisor)));

                                image.Mutate(x => x.Resize(thumbnailWidth, height));
                                image.Save(output, encoder);
                                output.Position = 0;
                                await blockBlob.UploadFromStreamAsync(output);
                            }
                        }
                    }
                    else
                    {
                        log.Info($"No encoder support for: {name}");
                    }
                }
            }
            catch (Exception ex)
            {
                log.Info(ex.Message);
                throw;
            }
        }        

        private static string GetBlobNameFromUrl(string bloblUrl)
        {
            var uri = new Uri(bloblUrl);
            var cloudBlob = new CloudBlob(uri);
            return cloudBlob.Name;
        }

        private static IImageEncoder GetEncoder(string extension)
        {
            IImageEncoder encoder = null;

            extension = extension.Replace(".", "");

            var isSupported = Regex.IsMatch(extension, "gif|png|jpe?g", RegexOptions.IgnoreCase);

            if (isSupported)
            {
                switch (extension)
                {
                    case "png":
                        encoder = new PngEncoder();
                        break;
                    case "jpg":
                        encoder = new JpegEncoder();
                        break;
                    case "jpeg":
                        encoder = new JpegEncoder();
                        break;
                    case "gif":
                        encoder = new GifEncoder();
                        break;
                    default:
                        break;
                }
            }

            return encoder;
        }
    }
}
