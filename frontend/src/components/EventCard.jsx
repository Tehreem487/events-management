import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const bookEvent = () => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(event);

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    alert("Booking Successful");
  };

  return (
    <div className="card">
      <img src={event.image} alt={event.title} />

      <div className="card-content">
        <h3>{event.title}</h3>
        <p>{event.location}</p>
        <p>{event.date}</p>

        <button onClick={bookEvent}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;