using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using OnlineMarketPlace.Application.Interfaces;
using OnlineMarketPlace.Domain;
using OnlineMarketPlace.WebApi.Helpers;
using OnlineMarketPlace.WebApi.Models;
using WebApi.Models;
using WebApi.ViewModels;
using AuthorizeAttribute = OnlineMarketPlace.WebApi.Helpers.AuthorizeAttribute;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthorizeController : ControllerBase
    {
        private IAuthorizeService _authorizeService;
        private AppSettings _appSettings;

        public AuthorizeController(IAuthorizeService authorizeService, IOptions<AppSettings> appSettings)
        {
            _authorizeService = authorizeService;
            _appSettings = appSettings.Value;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthorizeRequest model)
        {
            var user = _authorizeService.Authenticate(model.Email, model.Password);
            var response = Mapper.Instance.ToUserViewModel(user, GenerateJwtToken(user));

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        private string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(_appSettings.Key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
