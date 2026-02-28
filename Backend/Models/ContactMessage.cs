using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class ContactMessage
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(200)]
        public string Email { get; set; }

        [Required]
        [MaxLength(100)]
        public string HelpTopic { get; set; }

        [Required]
        [MaxLength(2000)]
        public string Message { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
