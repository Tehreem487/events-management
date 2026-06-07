import EventCard from "../components/EventCard";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Music Festival",
      location: "Lahore",
      date: "15 July 2026",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Tech Conference",
      location: "Islamabad",
      date: "20 August 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Business Summit",
      location: "Karachi",
      date: "05 September 2026",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Food Festival",
      location: "Rawalpindi",
      date: "10 October 2026",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      title: "Startup Expo",
      location: "Lahore",
      date: "25 November 2026",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      title: "Gaming Tournament",
      location: "Islamabad",
      date: "12 December 2026",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 7,
      title: "Fashion Show",
      location: "Karachi",
      date: "18 January 2027",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 8,
      title: "Art Exhibition",
      location: "Lahore",
      date: "22 February 2027",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 9,
      title: "Sports Gala",
      location: "Peshawar",
      date: "10 March 2027",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="page">
      <h1 className="page-title">Upcoming Events</h1>

      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;