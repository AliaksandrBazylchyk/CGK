using System;
using backend.Controllers;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class UsersInfoContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseSqlite(@"Data Source=CGK.db;");
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User() { Id = 1, AuthTime = DateTime.Now, Nickname = null, Email = null, Password = null }
            );
        }
    }
}