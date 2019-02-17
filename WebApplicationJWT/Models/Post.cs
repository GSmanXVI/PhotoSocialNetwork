using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationJWT.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string AppUserId { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public string ImagePath { get; set; }
        public string ThumbnailPath { get; set; }
    }
}
