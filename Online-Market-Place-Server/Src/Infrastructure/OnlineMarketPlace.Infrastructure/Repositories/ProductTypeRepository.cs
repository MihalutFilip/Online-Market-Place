using OnlineMarketPlace.Domain;
using OnlineMarketPlace.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineMarketPlace.Infrastructure.Repositories
{
    public class ProductTypeRepository : Repository<ProductType>, IProductTypeRepository
    {
        public ProductTypeRepository(MarketPlaceContext context) : base(context)
        {

        }

        public override IEnumerable<ProductType> GetAll()
        {
            return (from o in _table
                    select new ProductType()
                    {
                        Id = o.Id,
                        Name = o.Name,
                        Description = o.Description,
                        AttributeTypes = (from a in _context.AttributeTypes
                                          where a.ProductTypeId == o.Id
                                          select a).ToList()
                    });

        }
    }
}
