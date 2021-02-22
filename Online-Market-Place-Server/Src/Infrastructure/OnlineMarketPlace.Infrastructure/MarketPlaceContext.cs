using Microsoft.EntityFrameworkCore;
using OnlineMarketPlace.Domain;

namespace OnlineMarketPlace.Infrastructure
{
    public class MarketPlaceContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<AttributeType> AttributeTypes { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<AttributeValue> AttributeValues { get; set; }

        public MarketPlaceContext(DbContextOptions<MarketPlaceContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // one to many user - object for sale
            modelBuilder.Entity<Product>()
                .HasOne(x => x.User)
                .WithMany(x => x.Products)
                .OnDelete(DeleteBehavior.Cascade);

            // one to many object type - object for sale
            modelBuilder.Entity<Product>()
                .HasOne(x => x.ProductType)
                .WithMany(x => x.Products)
                .OnDelete(DeleteBehavior.Cascade);

            // one to many attribute type - attribute value
            modelBuilder.Entity<AttributeValue>()
                .HasOne(x => x.AttributeType)
                .WithMany(x => x.AttributeValues)
                .OnDelete(DeleteBehavior.Cascade);

            // one to many object for sale - attribute value
            modelBuilder.Entity<AttributeValue>()
                .HasOne(x => x.Product)
                .WithMany(x => x.AttributeValues)
                .OnDelete(DeleteBehavior.Cascade);

            // one to many object type - attribute type
            modelBuilder.Entity<AttributeType>()
                .HasOne(x => x.ProductType)
                .WithMany(x => x.AttributeTypes)
                .OnDelete(DeleteBehavior.Cascade);
        }         
    }
}
