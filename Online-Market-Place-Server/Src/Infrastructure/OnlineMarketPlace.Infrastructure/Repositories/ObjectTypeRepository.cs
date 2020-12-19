using OnlineMarketPlace.Domain;
using OnlineMarketPlace.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineMarketPlace.Infrastructure.Repositories
{
    public class ObjectTypeRepository : Repository<ObjectType>, IObjectTypeRepository
    {
        public ObjectTypeRepository(MarketPlaceContext context) : base(context)
        {
        }
    }
}
