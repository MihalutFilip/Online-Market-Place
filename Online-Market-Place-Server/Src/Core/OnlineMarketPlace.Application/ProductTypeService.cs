using OnlineMarketPlace.Application.Interfaces;
using OnlineMarketPlace.Domain;
using OnlineMarketPlace.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineMarketPlace.Application
{
    public class ProductTypeService : IProductTypeService
    {
        private readonly IProductTypeRepository _objectTypeRepository;

        public ProductTypeService(IProductTypeRepository objectTypeRepository)
        {
            _objectTypeRepository = objectTypeRepository;
        }

        public void Delete(int id)
        {
            _objectTypeRepository.Delete(id);
        }

        public IEnumerable<ProductType> GetAll()
        {
            return _objectTypeRepository.GetAll();
        }

        public ProductType GetById(int id)
        {
            return _objectTypeRepository.GetById(id);
        }

        public ProductType Insert(ProductType objectType)
        {
            return _objectTypeRepository.Insert(objectType);
        }

        public ProductType Update(ProductType objectType)
        {
            return _objectTypeRepository.Update(objectType);
        }
    }
}
