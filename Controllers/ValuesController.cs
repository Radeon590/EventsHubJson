using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DbLab.Entities;

namespace DbLab.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpPost]
        public void CreateData()
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                for (int i = 0; i < 5; i++)
                {
                    db.Users.Add(new User($"testUser{i}", $"testUser{i}", $"testUser{i}", $"testUser{i}", $"testUser{i}", $"testUser{i}", i));
                    db.Organizers.Add(new Organizer($"testOrganizer{i}", $"testOrganizer{i}", $"testOrganizer{i}"));
                    db.Events.Add(new Event(i, $"testEvent{i}", $"testEvent{i}", $"testEvent{i}", DateTime.Now, 100));
                    db.Donations.Add(new Donation(i, i, 250));
                    db.Participants.Add(new Participant(i, i));
                }
                db.SaveChanges();
            }
        }
    }
}
