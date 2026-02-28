using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using System.Linq;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        public class LoginModel
        {
            public string Username { get; set; } = string.Empty;
            public string Password { get; set; } = string.Empty;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel model)
        {
            var user = _context.AdminUsers.FirstOrDefault(u => u.Username == model.Username && u.PasswordHash == model.Password);
            
            if (user == null)
            {
                // Also hardcode a fallback admin setup if the database seed hasn't run yet or fails
                if (model.Username == "admin" && model.Password == "password123")
                {
                    return Ok(new { token = "fake-jwt-token-for-admin" });
                }
                return Unauthorized(new { message = "Invalid credentials" });
            }

            // In a real app we'd generate a real JWT. Doing a simple token here for demo purposes.
            return Ok(new { token = "fake-jwt-token-for-admin" });
        }
    }
}
