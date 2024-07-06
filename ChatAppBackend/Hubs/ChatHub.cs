using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using ChatAppBackend.Models;
using System;
using System.Net.Http;
using System.Net.Http.Json;

namespace ChatAppBackend.Hubs
{
    public class ChatHub : Hub
    {
        private readonly ChatContext _context;
        private readonly HttpClient _httpClient;

        public ChatHub(ChatContext context, HttpClient httpClient)
        {
            _context = context;
            _httpClient = httpClient;
        }

        public async Task SendMessage(string user, string message)
        {
            var chatMessage = new ChatMessage
            {
                User = user,
                Message = message,
                Timestamp = DateTime.UtcNow
            };

            _context.ChatMessages.Add(chatMessage);
            await _context.SaveChangesAsync();

            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public async Task SendMessageToBot(string user, string message)
        {
            var response = await _httpClient.PostAsJsonAsync("http://localhost:5000/chatbot", new { message });
            var botResponse = await response.Content.ReadFromJsonAsync<ChatMessage>();
            
            if (botResponse != null && botResponse.Message != null)
            {
                await Clients.All.SendAsync("ReceiveMessage", "Bot", botResponse.Message);
            }
        }
    }
}
