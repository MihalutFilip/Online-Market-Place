using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnlineMarketPlace.Domain
{
    public class ObjectForSale
    {
        public int Id { get; set; }
        public decimal Price { get; set; }

        public User User { get; set; }
        public int UserId { get; set; }

        public ObjectType ObjectType { get; set; }
        public int ObjectTypeId { get; set; }

        public ICollection<AttributeValue> AttributeValues { get; set; }
    }
}
