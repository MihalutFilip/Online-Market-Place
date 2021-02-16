using OnlineMarketPlace.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlineMarketPlace.Application.Interfaces
{
    public interface IProductService
    {
        IEnumerable<ProductForSale> GetAll();
        ProductForSale GetById(int id);
        ProductForSale Insert(ProductForSale objectType);
        ProductForSale Update(ProductForSale objectType);
        void Delete(int id);
    }
}
