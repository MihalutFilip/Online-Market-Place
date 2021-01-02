using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineMarketPlace.Application.Interfaces;
using OnlineMarketPlace.Domain;
using OnlineMarketPlace.WebApi.Helpers;
using OnlineMarketPlace.WebApi.Models;

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

        [HttpPost]
        [Authorize(new[] { Role.Admin })]
        public IActionResult Insert(ObjectTypeViewModel objectType)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var savedObjectType = _objectTypeService.Insert(Mapper.Instance.ToObjectType(objectType));
            return Ok(Mapper.Instance.ToObjectTypeViewModel(savedObjectType));
        }
    }
}
