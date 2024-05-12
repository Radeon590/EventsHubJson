using Microsoft.EntityFrameworkCore;
using EventsHubApi.Entities;
using Newtonsoft.Json;

namespace EventsHubApi
{
    public class ApplicationContext
    {
        public List<User> Users { get; set; } = null!;

        public ApplicationContext() 
        {
            if (File.Exists("./users.json"))
            {
                string json = File.ReadAllText("./users.json");
                List<User>? users = JsonConvert.DeserializeObject<List<User>>(json);
                if (users != null)
                {
                    Users = users;
                }
            }
            else
            {
                Users = new List<User>();
            }
        }

        public async Task SaveChangesAsync()
        {
            string json = JsonConvert.SerializeObject(Users);
            await File.WriteAllTextAsync("./users.json", json);
        }
    }
}
