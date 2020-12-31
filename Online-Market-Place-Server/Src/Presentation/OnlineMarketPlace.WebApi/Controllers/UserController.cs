using Microsoft.AspNetCore.Mvc;
using OnlineMarketPlace.Application.Interfaces;
using OnlineMarketPlace.Domain;
using OnlineMarketPlace.WebApi.Helpers;
using OnlineMarketPlace.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineMarketPlace.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [Authorize(new[] { Role.Admin })]
        public IActionResult GetAll()
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var users = _userService.GetAll().Select(user => Mapper.Instance.ToUserViewModel(user));
            return Ok(users);
        }

        [HttpPost]
        [Authorize(new[] { Role.Admin })]
        public IActionResult Post([FromBody] UserViewModel userViewModel)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var user = Mapper.Instance.ToUser(userViewModel);
            _userService.Insert(user);
            return Ok();
        }
    }
}
