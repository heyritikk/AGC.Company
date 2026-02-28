using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostMessage([FromBody] ContactMessage message)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            message.CreatedAt = DateTime.UtcNow;

            _context.ContactMessages.Add(message);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Message received successfully." });
        }

        [HttpGet("messages")]
        public IActionResult GetMessages()
        {
            var messages = _context.ContactMessages
                .OrderByDescending(m => m.CreatedAt)
                .ToList();
            return Ok(messages);
        }
    }
}
