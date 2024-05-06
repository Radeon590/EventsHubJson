namespace EventsHubApi.Entities
{
    public class Donation
    {
        public int Id { get; set; }
        public int OrganizerId { get; set; }
        public int EventId { get; set; }
        public float Sum { get; set; }

        public Donation() { }

        public Donation(int organizerId, int eventId, float sum) 
        {
            OrganizerId = organizerId;
            EventId = eventId;
            Sum = sum;
        }
    }
}
