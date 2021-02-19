using OnlineMarketPlace.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineMarketPlace.WebApi.Models
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public decimal Price { get; set; }
        public UserViewModel User { get; set; }
        public int ProductTypeId { get; set; }
        public ICollection<AttributeValueViewModel> AttributeValues { get; set; }
    }
}
