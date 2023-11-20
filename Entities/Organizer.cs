namespace DbLab.Entities
{
    public class Organizer
    {
        public int Id { get; set; }
        public string PublicNamespace { get; set; }
        public string FullNamespace { get; set; }
        public string? Description { get; set; }

        public Organizer() { }

        public Organizer(string publicNamespace, string fullNamespace, string description) 
        {
            PublicNamespace = publicNamespace;
            FullNamespace = fullNamespace;
            Description = description;
        }
    }
}
