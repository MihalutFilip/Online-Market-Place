using Microsoft.EntityFrameworkCore;
using OnlineMarketPlace.Domain;

namespace OnlineMarketPlace.Infrastructure
{
    public class MarketPlaceContext : DbContext
    {
        public MarketPlaceContext(DbContextOptions<MarketPlaceContext> options) : base(options)
        {

        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    // one to many user - object for sale
        //    modelBuilder.Entity<ObjectForSale>()
        //        .HasOne(x => x.User)
        //        .WithMany(x => x.ObjectsForSale);

        //    // one to many object type - object for sale
        //    modelBuilder.Entity<ObjectForSale>()
        //        .HasOne(x => x.ObjectType)
        //        .WithMany(x => x.ObjectsForSale);

        //    // one to many attribute type - attribute value
        //    modelBuilder.Entity<AttributeValue>()
        //        .HasOne(x => x.AttributeType)
        //        .WithMany(x => x.AttributeValues);

        //    // one to many object for sale - attribute value
        //    modelBuilder.Entity<AttributeValue>()
        //        .HasOne(x => x.ObjectForSale)
        //        .WithMany(x => x.AttributeValues);

        //    // one to many object type - attribute type
        //    modelBuilder.Entity<AttributeType>()
        //        .HasOne(x => x.ObjectType)
        //        .WithMany(x => x.AttributeTypes);

        //    // seed data
        //    modelBuilder.Entity<User>()
        //        .HasData(new User()
        //        {
        //            Id = 1,
        //            Email = "adminuser@gmail.com",
        //            Password = "admin",
        //            Role = Role.Admin,
        //            Username = "Admin User"
        //        });
        //}

        // Entities        
        public DbSet<User> Users { get; set; }
        //public DbSet<ObjectType> ObjectTypes { get; set; }
        //public DbSet<AttributeType> AttributeTypes { get; set; }
        //public DbSet<ObjectForSale> ObjectsForSale { get; set; }
        //public DbSet<AttributeValue> AttributeValues { get; set; }
    }
}
