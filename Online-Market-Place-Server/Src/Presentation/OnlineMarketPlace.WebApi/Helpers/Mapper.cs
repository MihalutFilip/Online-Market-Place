﻿using OnlineMarketPlace.Domain;
using OnlineMarketPlace.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineMarketPlace.WebApi.Helpers
{
    public sealed class Mapper
    {
        private static readonly Mapper instance = new Mapper();

        private Mapper()
        {
        }

        public static Mapper Instance
        {
            get
            {
                return instance;
            }
        }

        public UserViewModel ToUserViewModel(User user, string jwtToken = null)
        {
            return new UserViewModel()
            {
                Id = user.Id,
                Email = user.Email,
                Role = user.Role,
                Username = user.Username,
                JwtToken = jwtToken
            };
        }

        public User ToUser(UserViewModel user)
        {
            return new User()
            {
                Id = user.Id,
                Email = user.Email,
                Role = user.Role,
                Username = user.Username,
                Password = user.Password
            };
        }

        public ProductTypeViewModel ToProductTypeViewModel(ProductType productType)
        {
            return new ProductTypeViewModel()
            {
                Id = productType.Id,
                Name = productType.Name,
                Description = productType.Description,
                AttributeTypes = productType.AttributeTypes.Select(a => ToAttributeTypeViewModel(a)).ToList()
            };
        }

        public ProductType ToProductType(ProductTypeViewModel productType)
        {
            return new ProductType()
            {
                Id = productType.Id,
                Name = productType.Name,
                Description = productType.Description,
                AttributeTypes = productType.AttributeTypes.Select(a => ToAttributeType(a)).ToList()
            };
        }

        public ProductViewModel ToProductViewModel(Product product)
        {
            return new ProductViewModel()
            {
                Id = product.Id,
                Price = product.Price,
                UserId = product.UserId,
                ProductTypeId = product.ProductTypeId,
                AttributeValues = product.AttributeValues.Select(a => ToAttributeTypeViewModel(a)).ToList()
            };
        }

        public AttributeTypeViewModel ToAttributeTypeViewModel(AttributeType attributeType)
        {
            return new AttributeTypeViewModel()
            {
                Id = attributeType.Id,
                Name = attributeType.Name,
                DataType = attributeType.DataType
            };
        }

        public AttributeType ToAttributeType(AttributeTypeViewModel attributeType)
        {
            return new AttributeType()
            {
                Id = attributeType.Id,
                Name = attributeType.Name,
                DataType = attributeType.DataType
            };
        }

        // TODO: To get decision of using attribute value view model as attribute value
        //public AttributeValueViewModel ToAttributeViewModel(AttributeValue attributeValue)
        //{
        //    return new AttributeValueViewModel()
        //    {
        //        Id = attributeValue.Id,
        //        Name = attributeType.Name,
        //        DataType = attributeType.DataType
        //    };
        //}

        //public AttributeType ToAttributeType(AttributeTypeViewModel attributeType)
        //{
        //    return new AttributeType()
        //    {
        //        Id = attributeType.Id,
        //        Name = attributeType.Name,
        //        DataType = attributeType.DataType
        //    };
        //}
    }
}
