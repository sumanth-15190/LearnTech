import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const [userProfile, setUserProfile] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check login status and theme on load and when route changes
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
    setMobileMenuOpen(false);
    try {
      const u = JSON.parse(localStorage.getItem('user'));
      setUserProfile(u);
    } catch (e) {
      setUserProfile(null);
    }

    // Load theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, [location]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setShowMenu(false);
    window.location.href = "/signin";
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the profile container
      const profileContainer = document.querySelector('.profile-container');
      if (profileContainer && !profileContainer.contains(event.target) && showMenu) {
        setShowMenu(false);
      }
    };

    // Add event listener when menu is open
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    const handleScroll = () => {
      // Don't hide navbar if menu is open
      if (showMenu) return;

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, showMenu]);

  return (
    <header className={`navbar ${showNavbar ? "show" : "hide"}`}>
      {/* LEFT LOGO - CLICKABLE HOME */}
      <Link to="/" className="logo-section" onClick={() => { setShowMenu(false); setMobileMenuOpen(false); }} style={{ textDecoration: "none", cursor: "pointer" }}>
        <img src="/images/logo.png" alt="LearnTech Logo" className="logo-image" />
        <div className="logo">LearnTech</div>
      </Link>

      {/* SEARCH BAR */}
      <SearchBar />

      {/* NAV LINKS (Desktop) */}
      <nav className="nav-links">
        <Link to="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
        <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </nav>

      {/* MOBILE HAMBURGER BUTTON */}
      <div className="hamburger-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span style={{ fontSize: "28px", cursor: "pointer", color: isDarkMode ? "#fff" : "#282A35" }}>
          {mobileMenuOpen ? '✕' : '☰'}
        </span>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown" style={{
          position: "absolute",
          top: "100px",
          left: 0,
          right: 0,
          backgroundColor: isDarkMode ? "#1a1a1a" : "white",
          borderBottom: "1px solid #ddd",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          zIndex: 1000,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}>
          <Link to="/courses" style={{ textDecoration: "none", color: isDarkMode ? "#fff" : "#282A35", fontSize: "18px", fontWeight: "bold" }} onClick={() => setMobileMenuOpen(false)}>Courses</Link>
          <Link to="/about" style={{ textDecoration: "none", color: isDarkMode ? "#fff" : "#282A35", fontSize: "18px", fontWeight: "bold" }} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" style={{ textDecoration: "none", color: isDarkMode ? "#fff" : "#282A35", fontSize: "18px", fontWeight: "bold" }} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {!isLoggedIn ? (
        <Link to="/signin" className="signin-btn">
          Sign In
        </Link>
      ) : (
        <div className="profile-container">
          <div
            className="profile-icon"
            onClick={() => setShowMenu(!showMenu)}
            title={userProfile ? userProfile.username : 'Profile'}
          >
            <div className="profile-avatar-small">
              {userProfile?.username?.charAt(0).toUpperCase() || '👤'}
            </div>
          </div>

          {showMenu && (
            <div className="profile-menu" style={{
              position: "absolute",
              top: "100%",
              right: "70px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              minWidth: "320px",
              marginTop: "12px",
              border: "1px solid #e0e0e0",
              zIndex: 1001,
              animation: "slideDown 0.3s ease"
            }}>
              {/* Profile Header */}
              <div style={{
                padding: "20px",
                borderBottom: "1px solid #f0f0f0",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}>
                  {userProfile?.username?.charAt(0).toUpperCase() || '👤'}
                </div>
                <div>
                  <div style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#282A35",
                    marginBottom: "4px"
                  }}>
                    {userProfile?.username || 'User'}
                  </div>
                  <div style={{
                    fontSize: "13px",
                    color: "#999",
                    wordBreak: "break-all"
                  }}>
                    {userProfile?.email}
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div style={{ padding: "8px" }}>
                <Link
                  to="/profile"
                  onClick={() => setShowMenu(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    color: "#282A35",
                    textDecoration: "none",
                    borderRadius: "8px",
                    transition: "background-color 0.2s ease, color 0.2s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f5f5f5";
                    e.currentTarget.style.color = "#04aa6d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#282A35";
                  }}
                >
                  <span style={{ fontSize: "18px" }}>👤</span>
                  <span style={{ fontWeight: isDarkMode ? "800" : "500", textShadow: isDarkMode ? "0 0 1px currentColor" : "none" }}>View Profile</span>
                </Link>

                {/* Dark Theme Toggle */}
                <button
                  onClick={toggleDarkMode}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    color: "#282A35",
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: isDarkMode ? "800" : "500",
                    textShadow: isDarkMode ? "0 0 1px currentColor" : "none",
                    transition: "background-color 0.2s ease, color 0.2s ease",
                    textAlign: "left"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f5f5f5";
                    e.currentTarget.style.color = "#04aa6d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#282A35";
                  }}
                >
                  <span style={{ fontSize: "18px" }}>{isDarkMode ? "☀️" : "🌙"}</span>
                  <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>

                <button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    color: "#282A35",
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: isDarkMode ? "800" : "500",
                    textShadow: isDarkMode ? "0 0 1px currentColor" : "none",
                    transition: "background-color 0.2s ease, color 0.2s ease",
                    textAlign: "left"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffe6e6";
                    e.currentTarget.style.color = "#c00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#282A35";
                  }}
                >
                  <span style={{ fontSize: "18px" }}>🚪</span>
                  <span>Logout</span>
                </button>
              </div>

              {/* Footer */}
              <div style={{
                padding: "12px 16px",
                borderTop: "1px solid #f0f0f0",
                fontSize: "12px",
                color: "#999",
                textAlign: "center"
              }}>
                Secure Account
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;