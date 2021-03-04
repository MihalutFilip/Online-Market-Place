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
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productsService;

        public ProductController(IProductService productsService)
        {
            _productsService = productsService;
        }

        [HttpGet]
        [Authorize(new[] { Role.Provider })]
        public IActionResult GetAll()
        {
            var products = _productsService.GetAll().Select(product => Mapper.Instance.ToProductViewModel(product));
            return Ok(products);
        }

        [HttpPost]
        [Authorize(new[] { Role.Provider })]
        public IActionResult Insert(ProductViewModel product)
        {
            var savedProduct = _productsService.Insert(Mapper.Instance.ToProduct(product));
            return Ok(savedProduct);
        }
    }
}
