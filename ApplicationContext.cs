using Microsoft.EntityFrameworkCore;
using DbLab.Entities;

namespace DbLab
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Participant> Participants { get; set; } = null!;
        public DbSet<Organizer> Organizers { get; set; } = null!;
        public DbSet<Event> Events { get; set; } = null!;
        public DbSet<Donation> Donations { get; set; } = null!;

        public ApplicationContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=localhost;user=root;password=root;database=usersdb;",
                new MySqlServerVersion(new Version(8, 0, 25)));
        }
    }
}
