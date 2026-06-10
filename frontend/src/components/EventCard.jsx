import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const bookEvent = () => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
      alert("Please Register First");
      navigate("/register");
      return;
    }

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(event);

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    alert("Event Booked Successfully");
  };

  return (
    <div className="card">
      <img src={event.image} alt={event.title} />

      <div className="card-content">
        <h3>{event.title}</h3>

        <p><strong>📍 Location:</strong> {event.location}</p>

        <p><strong>🏢 Venue:</strong> {event.venue}</p>

        <p><strong>📅 Date:</strong> {event.date}</p>

        <p><strong>⏰ Time:</strong> {event.time}</p>

        <p><strong>🎫 Price:</strong> {event.price}</p>

        <p><strong>📂 Category:</strong> {event.category}</p>

        <p><strong>👤 Organizer:</strong> {event.organizer}</p>

        <p className="description">
          {event.description}
        </p>

        <button onClick={bookEvent}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;