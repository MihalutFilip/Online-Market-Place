﻿using OnlineMarketPlace.Domain;
using OnlineMarketPlace.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OnlineMarketPlace.Infrastructure.Repositories
{
    public class ObjectTypeRepository : Repository<ObjectType>, IObjectTypeRepository
    {
        public ObjectTypeRepository(MarketPlaceContext context) : base(context)
        {

        }

        public override IEnumerable<ObjectType> GetAll()
        {
            return (from o in _table
                    select new ObjectType()
                    {
                        Id = o.Id,
                        Name = o.Name,
                        AttributeTypes = (from a in _context.AttributeTypes
                                          where a.Id == o.Id
                                          select a).ToList()
                    });

        }
    }
}
