using OnlineMarketPlace.Domain.DatabaseEntities;
using OnlineMarketPlace.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineMarketPlace.Infrastructure.Repositories
{
    public class MessageRepository : Repository<Message>, IMessageRepository
    {
        public MessageRepository(MarketPlaceContext context) : base(context)
        {
        }

        public IEnumerable<Message> GetAllByUser(int userId)
        {
            return new List<Message>();
        }
    }
}
