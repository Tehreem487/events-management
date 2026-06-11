import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("⚠ Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "https://events-management-production.up.railway.app/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userName", res.data.user.name);
      localStorage.setItem("userEmail", res.data.user.email);

      setSuccess("✅ Login Successful");

      setTimeout(() => {
        navigate("/events");
      }, 1000);
    } catch (err) {
      setError(
        err.response?.data?.message || "❌ Invalid Credentials"
      );
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p>Login to EventHub</p>

        {error && <div className="error-msg">{error}</div>}
        {success && <div className="success-msg">{success}</div>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <span>
          Don't have an account?{" "}
          <b
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </b>
        </span>
      </div>
    </div>
  );
};

export default Login;