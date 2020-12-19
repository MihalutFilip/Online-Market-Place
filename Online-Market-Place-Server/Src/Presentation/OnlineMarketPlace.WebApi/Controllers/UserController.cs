using Microsoft.AspNetCore.Mvc;
using OnlineMarketPlace.Application.Interfaces;
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

        [HttpPost]
        //[Authorize]
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
