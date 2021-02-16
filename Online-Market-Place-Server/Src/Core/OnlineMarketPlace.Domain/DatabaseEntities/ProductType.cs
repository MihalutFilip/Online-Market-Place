using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnlineMarketPlace.Domain
{
    public class ProductType : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<Product> Products { get; set; }
        public ICollection<AttributeType> AttributeTypes { get; set; }
    }
}
