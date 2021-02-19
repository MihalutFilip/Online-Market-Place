﻿using Microsoft.EntityFrameworkCore;
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
            return _context.Products.Include("AttributeValues").Include("AttributeValues.AttributeType").Include("User").ToList(); 
        }
    }
}
