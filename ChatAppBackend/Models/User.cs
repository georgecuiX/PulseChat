namespace ChatAppBackend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty; // Ensure non-null initialization
        public string Password { get; set; } = string.Empty; // Ensure non-null initialization
    }

    public class UserDto
    {
        public string Username { get; set; } = string.Empty; // Ensure non-null initialization
        public string Password { get; set; } = string.Empty; // Ensure non-null initialization
    }
}
