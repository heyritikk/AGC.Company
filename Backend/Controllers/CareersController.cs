using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CareersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CareersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("apply")]
        public async Task<IActionResult> SubmitApplication([FromBody] JobApplication application)
        {
            if (application == null)
            {
                return BadRequest("Application data is missing.");
            }

            try
            {
                _context.JobApplications.Add(application);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Application submitted successfully", id = application.Id });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while saving the application", details = ex.Message });
            }
        }

        [HttpGet("applications")]
        public IActionResult GetApplications()
        {
            var applications = _context.JobApplications
                .OrderByDescending(a => a.AppliedAt)
                .ToList();
            return Ok(applications);
        }
    }
}
