import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [lastRegistered, setLastRegistered] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const lr = JSON.parse(localStorage.getItem("lastRegistered"));
      if (lr) setLastRegistered(lr);
    } catch (e) {
      // ignore
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);

    // call server login
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Invalid credentials");
        return;
      }

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify({ email: data.email, username: data.username }));
      localStorage.removeItem("lastRegistered");
      
      // Clear form on success
      setEmail("");
      setPassword("");
      
      navigate("/", { replace: true });
    } catch (err) {
      setError("Server error during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <form className="signin-card" onSubmit={handleLogin} style={{ width: "100%", maxWidth: "500px", padding: "40px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px", fontWeight: "bold" }}>Login</h2>

        {error && (
          <div style={{ 
            backgroundColor: "#ffe6e6", 
            color: "#c00", 
            padding: "12px", 
            borderRadius: "6px", 
            marginBottom: "20px",
            border: "1px solid #ffcccc",
            fontSize: "14px"
          }}>
            {error}
          </div>
        )}

        {lastRegistered && (
          <div style={{ 
            background: "#e6ffed", 
            padding: "15px", 
            borderRadius: "6px", 
            marginBottom: "20px",
            border: "1px solid #99ffcc",
            fontSize: "14px"
          }}>
            <strong>✓ Account created successfully</strong>
            <div style={{ marginTop: "8px" }}>Username: <strong>{lastRegistered.username}</strong></div>
            <div>Email: <strong>{lastRegistered.email}</strong></div>
          </div>
        )}

        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "14px" }}>Email Address</label>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            spellCheck="false"
            data-lpignore="true"
            data-form-type="other"
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "16px",
              boxSizing: "border-box",
              transition: "border-color 0.3s ease",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}
            onFocus={(e) => e.target.style.borderColor = "#04aa6d"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <small style={{ display: "block", marginTop: "6px", color: "#666", fontSize: "12px" }}>We'll never share your email with anyone else</small>
        </div>

        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "14px" }}>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              data-lpignore="true"
              data-form-type="other"
              required
              style={{
                width: "100%",
                padding: "12px 45px 12px 12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "16px",
                boxSizing: "border-box",
                transition: "border-color 0.3s ease",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
              }}
              onFocus={(e) => e.target.style.borderColor = "#04aa6d"}
              onBlur={(e) => e.target.style.borderColor = "#ddd"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                color: "#666",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#04aa6d"}
              onMouseLeave={(e) => e.target.style.color = "#666"}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
          <small style={{ display: "block", marginTop: "6px", color: "#666", fontSize: "12px" }}>Use a strong password with uppercase, lowercase, numbers, and symbols</small>
        </div>

        <button 
          className="primary-btn" 
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: loading ? "#999" : "#04aa6d",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            marginTop: "10px"
          }}
          onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = "#038a57", e.target.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = "#04aa6d", e.target.style.transform = "scale(1)")}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={{ marginTop: "20px", textAlign: "center", fontSize: "14px", color: "#555" }}>
          Don't have an account? <Link to="/signup" style={{ color: "#04aa6d", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;