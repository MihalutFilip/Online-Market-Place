using OnlineMarketPlace.Domain;
using OnlineMarketPlace.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineMarketPlace.WebApi.Helpers
{
    public sealed class Mapper
    {
        private static readonly Mapper instance = new Mapper();

        static Mapper()
        {
        }

        private Mapper()
        {
        }

        public static Mapper Instance
        {
            get
            {
                return instance;
            }
        }

        public UserViewModel ToUserViewModel(User user, string jwtToken)
        {
            return new UserViewModel()
            {
                Id = user.Id,
                Email = user.Email,
                Role = user.Role,
                Username = user.Username,
                JwtToken = jwtToken
            };
        }
    }
}
