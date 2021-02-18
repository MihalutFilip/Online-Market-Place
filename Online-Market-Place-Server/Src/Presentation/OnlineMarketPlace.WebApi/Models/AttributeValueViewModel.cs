using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineMarketPlace.WebApi.Models
{
    public class AttributeValueViewModel
    {
        public string Name { get; set; }
        public DataType DataType { get; set; }
        public string Value { get; set; }
    }
}
