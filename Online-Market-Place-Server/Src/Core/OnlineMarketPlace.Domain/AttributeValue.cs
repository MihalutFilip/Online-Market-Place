using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnlineMarketPlace.Domain
{
    public class AttributeValue
    {
        public int Id { get; set; }
        public int Value { get; set; }

        public AttributeType AttributeType { get; set; }
        public int AttributeTypeId { get; set; }

        public ObjectForSale ObjectForSale { get; set; }
        public int ObjectForSaleId { get; set; }
    }
}
