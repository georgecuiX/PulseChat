using Microsoft.AspNetCore.Mvc;
using ChatAppBackend.Models;
using System.Linq;

namespace ChatAppBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly ChatContext _context;

        public ChatController(ChatContext context)
        {
            _context = context;
        }

        [HttpGet("messages")]
        public IActionResult GetMessages()
        {
            var messages = _context.ChatMessages.OrderBy(m => m.Timestamp).ToList();
            return Ok(messages);
        }
    }
}
