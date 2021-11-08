#nullable enable
using System;

namespace backend.Controllers
{
    public class User
    {
        public long Id { get; set; }
        public DateTime AuthTime { get; set; }
        public string? Email { get; set; }
        public string? Nickname { get; set; }
        public string? Password { get; set; }
    }
}