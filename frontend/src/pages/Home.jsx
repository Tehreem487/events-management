import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1>Welcome To EventHub</h1>

      <p>Manage and Book Events Easily</p>

      <button onClick={() => navigate("/events")}>
        Explore Events
      </button>
    </div>
  );
};

export default Home;