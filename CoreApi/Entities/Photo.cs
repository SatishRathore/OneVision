using System.ComponentModel.DataAnnotations.Schema;

namespace CoreApi.Entities
{
    [Table("Photos")]
    public class Photo
    {
        public int Id { get; set; }
        public string UrlPath { get; set; }  
        public bool IsMain { get; set; }   
        public string PublicId { get; set; }
        public AppUser AppUser { get; set; }   
        public int AppUserId { get; set; }   

    }
}