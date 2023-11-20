namespace DbLab.Entities
{
    public class Participant
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int EventId { get; set; }

        public Participant() { }

        public Participant(int userId, int eventId)
        {

            UserId = userId;
            EventId = eventId;
        }
    }
}
