import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Save login status
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Success message
    alert("Login Successful");

    // Navigate to Events page
    navigate("/events");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <h2>Login</h2>

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

      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;