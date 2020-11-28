using OnlineMarketPlace.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineMarketPlace.WebApi.Models
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string JwtToken { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public Role Role { get; set; }
    }
}
