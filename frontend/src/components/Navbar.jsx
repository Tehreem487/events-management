import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("loggedIn");
  const userName = localStorage.getItem("userName");

  const logout = () => {
    localStorage.removeItem("loggedIn");

    alert("Logged Out Successfully");

    navigate("/login");

    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2>EventHub</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/bookings">My Bookings</Link>

        {isLoggedIn ? (
          <>
            <span className="user-name">
              👤 {userName}
            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;