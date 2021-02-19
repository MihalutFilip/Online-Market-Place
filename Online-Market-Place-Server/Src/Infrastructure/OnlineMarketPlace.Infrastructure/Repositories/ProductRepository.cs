using Microsoft.EntityFrameworkCore;
using OnlineMarketPlace.Domain;
using OnlineMarketPlace.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineMarketPlace.Infrastructure.Repositories
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(MarketPlaceContext context) : base(context)
        {
        }

        public override IEnumerable<Product> GetAll()
        {
            return _context.Products.Include("AttributeValues").Include("AttributeValues.AttributeType").ToList(); 
                //(from o in _table
                //    select new Product()
                //    {
                //        Id = o.Id,
                //        Price = o.Price,
                //        ProductTypeId = o.ProductTypeId,
                //        UserId = o.UserId,
                //        AttributeValues = (from a in _context.AttributeValues
                //                           where a.ProductId == o.Id
                //                           select new AttributeValue()
                //                           {
                //                               Id = a.Id,
                //                               Value = a.Value,
                //                               AttributeType = (from at in _context.AttributeTypes
                //                                                where at.Id == a.AttributeTypeId
                //                                                select at).FirstOrDefault()
                //                           }).ToList()
                //    });

        }
    }
}
