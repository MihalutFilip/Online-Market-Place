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
    public class ProductTypeController : ControllerBase
    {
        private readonly IProductTypeService _objectTypeService;

        public ProductTypeController(IProductTypeService objectTypeService)
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
        public IActionResult Insert(ProductTypeViewModel objectType)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var savedObjectType = _objectTypeService.Insert(Mapper.Instance.ToObjectType(objectType));
            return Ok(Mapper.Instance.ToObjectTypeViewModel(savedObjectType));
        }

        [HttpDelete("{objectTypeId}")]
        [Authorize(new[] { Role.Admin })]
        public IActionResult Delete(int objectTypeId)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            _objectTypeService.Delete(objectTypeId);
            return Ok();
        }
    }
}
