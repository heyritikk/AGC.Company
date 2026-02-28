using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<ContactMessage> ContactMessages { get; set; }
        public DbSet<JobApplication> JobApplications { get; set; }
        public DbSet<AdminUser> AdminUsers { get; set; }
        public DbSet<JobOpening> JobOpenings { get; set; }
    }
}
