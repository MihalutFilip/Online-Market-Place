using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace OnlineMarketPlace.Domain
{
    public class AttributeType : Entity
    {
        public string Name { get; set; }
        public DataType DataType { get; set; }

        public ObjectType ObjectType { get; set; }
        public int ObjectTypeId { get; set; }

        public ICollection<AttributeValue> AttributeValues { get; set; }
    }
}
