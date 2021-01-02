using OnlineMarketPlace.Application.Interfaces;
using OnlineMarketPlace.Domain;
using OnlineMarketPlace.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineMarketPlace.Application
{
    public class ObjectTypeService : IObjectTypeService
    {
        private readonly IObjectTypeRepository _objectTypeRepository;

        public ObjectTypeService(IObjectTypeRepository objectTypeRepository)
        {
            _objectTypeRepository = objectTypeRepository;
        }

        public void Delete(int id)
        {
            _objectTypeRepository.Delete(id);
        }

        public IEnumerable<ObjectType> GetAll()
        {
            return _objectTypeRepository.GetAll();
        }

        public ObjectType GetById(int id)
        {
            return _objectTypeRepository.GetById(id);
        }

        public ObjectType Insert(ObjectType objectType)
        {
            return _objectTypeRepository.Insert(objectType);
        }

        public ObjectType Update(ObjectType objectType)
        {
            return _objectTypeRepository.Update(objectType);
        }
    }
}
