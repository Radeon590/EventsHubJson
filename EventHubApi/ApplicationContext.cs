using Microsoft.EntityFrameworkCore;
using EventsHubApi.Entities;

namespace EventsHubApi
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Organizer> Organizers { get; set; } = null!;
        public DbSet<Event> Events { get; set; } = null!;
        public DbSet<Donation> Donations { get; set; } = null!;

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                    .HasMany(c => c.Events)
                    .WithMany(s => s.Users)
                    .UsingEntity(j => j.ToTable("Participants"));
        }
    }
}
