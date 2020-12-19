using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnlineMarketPlace.Domain
{
    public class ObjectForSale : Entity
    {
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }

        public User User { get; set; }
        public int UserId { get; set; }

        public ObjectType ObjectType { get; set; }
        public int ObjectTypeId { get; set; }

        public ICollection<AttributeValue> AttributeValues { get; set; }
    }
}
