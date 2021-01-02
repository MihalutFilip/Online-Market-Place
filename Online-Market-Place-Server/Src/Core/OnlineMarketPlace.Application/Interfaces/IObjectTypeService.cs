using OnlineMarketPlace.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineMarketPlace.Application.Interfaces
{
    public interface IObjectTypeService
    {
        IEnumerable<ObjectType> GetAll();
        ObjectType GetById(int id);
        ObjectType Insert(ObjectType objectType);
        ObjectType Update(ObjectType objectType);
        void Delete(int id);
    }
}
