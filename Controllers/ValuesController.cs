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
                    var newUser = new User($"testUser{i}", $"testUser{i}", $"testUser{i}", $"testUser{i}", $"testUser{i}", $"testUser{i}", i);
                    db.Users.Add(newUser);
                    db.Organizers.Add(new Organizer($"testOrganizer{i}", $"testOrganizer{i}", $"testOrganizer{i}"));
                    var newEvent = new Event(i, $"testEvent{i}", $"testEvent{i}", $"testEvent{i}", DateTime.Now, 100);
                    db.Events.Add(newEvent);
                    db.Donations.Add(new Donation(i, i, 250));
                    newUser.Events.Add(newEvent);
                }
                db.SaveChanges();
            }
        }
    }
}
