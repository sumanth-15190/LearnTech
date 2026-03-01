import { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const u = JSON.parse(localStorage.getItem("user"));
      setUser(u);
    } catch (e) {
      setUser(null);
    }
  }, []);

  if (!user) return <div className="page-box-container"><div className="page-box"><p>Please sign in to view your profile.</p></div></div>;

  return (
    <div className="page-box-container">
      <div className="page-box">
        <div className="page-box-header">
          <h2>Welcome to LearnTech</h2>
          <p className="page-box-subtitle">Your learning journey continues here</p>
        </div>

        <div className="profile-avatar-section">
          <div className="profile-avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>
        </div>

        <div className="info-cards-grid">
          <div className="modern-info-card">
            <i className="fas fa-user"></i>
            <div className="modern-info-content">
              <span className="modern-info-label">Username</span>
              <span className="modern-info-value">{user.username}</span>
            </div>
          </div>
          <div className="modern-info-card">
            <i className="fas fa-envelope"></i>
            <div className="modern-info-content">
              <span className="modern-info-label">Email</span>
              <span className="modern-info-value">{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
