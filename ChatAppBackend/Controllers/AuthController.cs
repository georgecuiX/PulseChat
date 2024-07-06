using Microsoft.AspNetCore.Mvc;
using ChatAppBackend.Models;
using System.Linq;

namespace ChatAppBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ChatContext _context;

        public AuthController(ChatContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register(UserDto userDto)
        {
            if (_context.Users.Any(u => u.Username == userDto.Username))
            {
                return BadRequest("User already exists.");
            }

            var user = new User
            {
                Username = userDto.Username,
                Password = userDto.Password // Note: Hash passwords in a real application
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok();
        }

        [HttpPost("login")]
        public IActionResult Login(UserDto userDto)
        {
            var user = _context.Users.SingleOrDefault(u => u.Username == userDto.Username && u.Password == userDto.Password);
            if (user == null)
            {
                return Unauthorized();
            }

            return Ok();
        }
    }
}
