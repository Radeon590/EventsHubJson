namespace DbLab.Entities
{
    public class Event
    {
        public int Id { get; set; }
        public int OrganizerId { get; set; }
        public string Namespace { get; set; }
        public string? Description { get; set; }
        public string Address { get; set; }
        public DateTime Date { get; set; }
        public float Price { get; set; }

        public Event() { }

        public Event(int organizerId, string namespacE, string description, string address, DateTime date, float price)
        {
            OrganizerId = organizerId;
            Namespace = namespacE;
            Description = description;
            Address = address;
            Date = date;
            Price = price;
        }
    }
}
