import PageWrapper from "../components/PageWrapper";

function About() {
  return (
    <PageWrapper>
      <div className="page-box-container">
        <div className="page-box">
          <div className="page-box-header">
            <h2>About LearnTech</h2>
            <p className="page-box-subtitle">Empowering the next generation of developers</p>
          </div>
          <div className="about-text-card">
            <p>
              LearnTech is a modern learning platform designed to make programming education simple, clear, and practical for all learners. It provides structured courses and easy-to-understand explanations to help users build strong coding foundations.
            </p>
            <br />
            <p>
              The platform focuses on technology-driven learning using real-world examples and hands-on practice. LearnTech empowers students to develop practical skills and confidently apply them in real projects.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default About;