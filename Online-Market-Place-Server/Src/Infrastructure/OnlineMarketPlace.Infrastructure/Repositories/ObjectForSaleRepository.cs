using OnlineMarketPlace.Domain;
using OnlineMarketPlace.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineMarketPlace.Infrastructure.Repositories
{
    public class ObjectForSaleRepository : Repository<ObjectForSale>, IObjectForSaleRepository
    {
        public ObjectForSaleRepository(MarketPlaceContext context) : base(context)
        {
        }
    }
}
