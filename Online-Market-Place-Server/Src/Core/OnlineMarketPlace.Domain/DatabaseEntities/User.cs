using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineMarketPlace.Domain
{
    public class User : Entity
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public Role Role { get; set; }
        public string Password { get; set; }
        public ICollection<ObjectForSale> ObjectsForSale { get; set; }
    }
}
