import PageWrapper from "../components/PageWrapper";

function Contact() {
  return (
    <PageWrapper>
      <div className="page-box-container">
        <div className="page-box small">
          <div className="page-box-header">
            <h2>Get in Touch</h2>
            <p className="page-box-subtitle">We're here to help you on your learning journey</p>
          </div>

          <div className="info-cards-grid">
            <div className="modern-info-card">
              <i className="fas fa-envelope"></i>
              <div className="modern-info-content">
                <span className="modern-info-label">Email Address</span>
                <span className="modern-info-value">contact@learntech.com</span>
              </div>
            </div>

            <div className="modern-info-card">
              <i className="fas fa-phone-alt"></i>
              <div className="modern-info-content">
                <span className="modern-info-label">Phone Number</span>
                <span className="modern-info-value">+91 98765 43210</span>
              </div>
            </div>

            <div className="modern-info-card">
              <i className="fas fa-map-marker-alt"></i>
              <div className="modern-info-content">
                <span className="modern-info-label">Office Location</span>
                <span className="modern-info-value">123 Tech Avenue, Silicon Valley</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Contact;