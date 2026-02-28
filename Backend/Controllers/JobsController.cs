using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public JobsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetJobs()
        {
            var jobs = _context.JobOpenings
                .Where(j => j.IsActive)
                .OrderByDescending(j => j.CreatedAt)
                .ToList();
            return Ok(jobs);
        }

        [HttpPost]
        public async Task<IActionResult> AddJob([FromBody] JobOpening job)
        {
            if (job == null) return BadRequest();

            job.CreatedAt = DateTime.UtcNow;
            _context.JobOpenings.Add(job);
            await _context.SaveChangesAsync();
            return Ok(job);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJob(int id)
        {
            var job = await _context.JobOpenings.FindAsync(id);
            if (job == null) return NotFound();

            _context.JobOpenings.Remove(job);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
