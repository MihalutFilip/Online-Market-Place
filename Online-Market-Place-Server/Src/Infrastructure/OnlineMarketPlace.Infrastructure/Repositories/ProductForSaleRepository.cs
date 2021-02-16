using OnlineMarketPlace.Domain;
using OnlineMarketPlace.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineMarketPlace.Infrastructure.Repositories
{
    public class ProductForSaleRepository : Repository<ProductForSale>, IProductForSaleRepository
    {
        public ProductForSaleRepository(MarketPlaceContext context) : base(context)
        {
        }
    }
}
