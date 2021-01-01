using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnlineMarketPlace.Domain
{
    public class ObjectType : Entity
    {
        public string Name { get; set; }
        public ICollection<ObjectForSale> ObjectsForSale { get; set; }
        public ICollection<AttributeType> AttributeTypes { get; set; }
    }
}
