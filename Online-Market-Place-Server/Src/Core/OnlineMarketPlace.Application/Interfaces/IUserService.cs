using OnlineMarketPlace.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineMarketPlace.Application.Interfaces
{
    public interface IUserService
    {
        IEnumerable<User> GetAll();
        User GetById(int id);
        void Insert(User user);
        void Update(User user);
        void Delete(int id);
    }
}
