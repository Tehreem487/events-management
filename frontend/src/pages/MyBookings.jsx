import { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  const deleteBooking = (index) => {
    const updated = bookings.filter((_, i) => i !== index);

    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);

    alert("Booking Deleted Successfully");
  };

  return (
    <div className="page">
      <h1 className="page-title">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="empty-text">No bookings found.</p>
      ) : (
        <div className="booking-grid">
          {bookings.map((event, index) => (
            <div className="booking-card" key={index}>
              <img
                className="booking-img"
                src={event?.image}
                alt={event?.title || "Event"}
              />

              <div className="booking-info">
                <h3>{event?.title}</h3>
                <p>{event?.location}</p>
                <p>{event?.date}</p>

                <button
                  className="delete-btn"
                  onClick={() => deleteBooking(index)}
                >
                  Delete Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;