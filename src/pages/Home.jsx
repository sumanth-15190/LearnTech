import PageWrapper from "../components/PageWrapper";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/courses");
    } else {
      navigate("/signin");
    }
  };

  return (
    <PageWrapper>
      <section className="hero">
        <div className="hero-text center-content">
          <h1>Learn to Code</h1>
          <p>Start coding today and build skills for tomorrow.</p>

          <button className="primary-btn" onClick={handleStartLearning}>Start Learning</button>
        </div>

        <div className="hero-image">
          <img src="/images/logo.png" alt="LearnTech" className="transparent-hero-img" />
        </div>
      </section>
    </PageWrapper>
  );
}

export default Home;
