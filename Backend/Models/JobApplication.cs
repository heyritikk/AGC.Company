namespace Backend.Models
{
    public class JobApplication
    {
        public int Id { get; set; }
        public string JobId { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string MobileNumber { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string CoverLetter { get; set; } = string.Empty;
        public DateTime AppliedAt { get; set; } = DateTime.UtcNow;
    }
}
