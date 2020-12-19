using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using OnlineMarketPlace.Application.Helpers;
using OnlineMarketPlace.Application.Interfaces;
using OnlineMarketPlace.Domain;
using OnlineMarketPlace.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace OnlineMarketPlace.Application
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public void Delete(int id)
        {
            _userRepository.Delete(id);
        }

        public IEnumerable<User> GetAll()
        {
            return _userRepository.GetAll();
        }

        public User GetById(int id)
        {
            return _userRepository.GetById(id);
        }

        public void Insert(User user)
        {
            user.Password = PasswordHasher.Instance.Hash(user.Password);
            _userRepository.Insert(user);
        }

        public void Update(User user)
        {
            _userRepository.Update(user);
        }

    }
}
