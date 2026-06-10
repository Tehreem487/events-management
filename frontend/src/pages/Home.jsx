import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Welcome To EventHub</h1>
        <p>Manage and Book Events Easily</p>

        <button onClick={() => navigate("/events")}>
          Explore Events
        </button>
      </div>
    </div>
  );
};

export default Home;