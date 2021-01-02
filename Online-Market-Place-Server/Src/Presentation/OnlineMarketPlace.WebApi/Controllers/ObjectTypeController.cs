using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineMarketPlace.Application.Interfaces;
using OnlineMarketPlace.Domain;
using OnlineMarketPlace.WebApi.Helpers;

namespace OnlineMarketPlace.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ObjectTypeController : ControllerBase
    {
        private readonly IObjectTypeService _objectTypeService;

        public ObjectTypeController(IObjectTypeService objectTypeService)
        {
            _objectTypeService = objectTypeService;
        }

        [HttpGet]
        [Authorize(new[] { Role.Admin })]
        public IActionResult GetAll()
        {
            var objectTypes = _objectTypeService.GetAll().Select(objectType => Mapper.Instance.ToObjectTypeViewModel(objectType));
            return Ok(objectTypes);
        }

        //[HttpPost]
        //[Authorize(new[] { Role.Admin })]
        //public IActionResult Insert()
        //{
        //    if (!ModelState.IsValid)
        //        return BadRequest();

        //    //var users = _objectTypeService.GetAll().Select(user => Mapper.Instance.ToUserViewModel(user));
        //    return Ok(users);
        //}
    }
}
