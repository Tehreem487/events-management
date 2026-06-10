import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("⚠ Please fill all fields");
      return;
    }

    try {
      console.log("Hitting API:", API_URL); // Debug ke liye
      await axios.post(
        `${API_URL}/api/auth/register`,
        { name, email, password }
      );

      setSuccess("✅ Account Created Successfully");

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "❌ Registration Failed"
      );
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create Account 🎉</h2>
        <p>Join EventHub Today</p>

        {error && <div className="error-msg">{error}</div>}
        {success && <div className="success-msg">{success}</div>}

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button onClick={handleRegister}>
          Register
        </button>

        <span>
          Already have an account?{" "}
          <b
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </b>
        </span>
      </div>
    </div>
  );
};

export default Register;