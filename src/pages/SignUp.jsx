import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getUsers = () => {
    try {
      return JSON.parse(localStorage.getItem("users")) || [];
    } catch (e) {
      return [];
    }
  };

  const setUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("https://learntech-backend-30xu.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      // Save last registered for confirmation
      localStorage.setItem("lastRegistered", JSON.stringify(data));

      navigate("/signin", { replace: true });
    } catch (err) {
      setError("Server error during registration");
    }
  };

  return (
    <div className="signin-page">
      <form className="signin-card" onSubmit={handleRegister}>
        <h2>Create Account</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="form-group">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="primary-btn" type="submit">Create Account</button>

        <p style={{ marginTop: 12 }}>
          Already have an account? <a href="/signin">Sign in</a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
