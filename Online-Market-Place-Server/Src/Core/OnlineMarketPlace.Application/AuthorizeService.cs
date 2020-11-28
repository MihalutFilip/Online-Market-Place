using Microsoft.IdentityModel.Tokens;
using OnlineMarketPlace.Application.Interfaces;
using OnlineMarketPlace.Domain;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace OnlineMarketPlace.Application
{
    public class AuthorizeService : IAuthorizeService
    {
        public AuthorizeService()
        {

        }
        public User Authenticate(string email, string password)
        {
            var user = new User() { Email = "1", Id = 1 }; 
            return user;
        }

        
    }
}
