using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnlineMarketPlace.Domain
{
    public class AttributeValue : Entity
    {
        public int Value { get; set; }

        public AttributeType AttributeType { get; set; }
        public int AttributeTypeId { get; set; }

        public Product Product { get; set; }
        public int ProductId { get; set; }
    }
}
