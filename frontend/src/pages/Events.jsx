import EventCard from "../components/EventCard";

const events = [
  {
    id: 1,
    title: "Music Festival",
    location: "Lahore",
    venue: "Expo Center Lahore",
    date: "15 July 2026",
    time: "7:00 PM",
    organizer: "EventHub",
    category: "Music",
    price: "Rs. 2,000",
    description: "Enjoy live performances from Pakistan's top singers.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
  },

  {
    id: 2,
    title: "Tech Conference",
    location: "Islamabad",
    venue: "Convention Center Islamabad",
    date: "20 August 2026",
    time: "10:00 AM",
    organizer: "Tech Pakistan",
    category: "Technology",
    price: "Rs. 3,500",
    description: "Learn about AI and modern technology.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
  },

  {
    id: 3,
    title: "Business Summit",
    location: "Karachi",
    venue: "Marriott Hotel Karachi",
    date: "05 September 2026",
    time: "9:00 AM",
    organizer: "Business Hub",
    category: "Business",
    price: "Rs. 4,000",
    description: "Meet entrepreneurs and investors.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
  }
];

const Events = () => {
  return (
    <div className="page">
      <h1 className="page-title">Upcoming Events</h1>

      <div className="event-grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;