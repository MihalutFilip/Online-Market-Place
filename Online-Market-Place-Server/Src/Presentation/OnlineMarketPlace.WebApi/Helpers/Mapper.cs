using OnlineMarketPlace.Domain;
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

        public ProductTypeViewModel ToObjectTypeViewModel(ProductType objectType)
        {
            return new ProductTypeViewModel()
            {
                Id = objectType.Id,
                Name = objectType.Name,
                Description = objectType.Description,
                AttributeTypes = objectType.AttributeTypes.Select(a => ToAttributeTypeViewModel(a)).ToList()
            };
        }

        public ProductType ToObjectType(ProductTypeViewModel objectType)
        {
            return new ProductType()
            {
                Id = objectType.Id,
                Name = objectType.Name,
                Description = objectType.Description,
                AttributeTypes = objectType.AttributeTypes.Select(a => ToAttributeType(a)).ToList()
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
    }
}
