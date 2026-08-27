import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="container">
          <span className="section-label">Contact Us</span>

          <h1>Get in Touch</h1>

          <p>
            Have a question? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-label">Contact Information</span>

            <h2>We Are Here to Help</h2>

            <div className="contact-item">
              <FaPhone />
              <div>
                <h3>Phone</h3>
                <p>+93 700 000 000</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>info@coursewebsite.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <h3>Location</h3>
                <p>Kabul, Afghanistan</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted && (
              <div className="contact-success">
                Your message has been sent successfully.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contactName">Full Name</label>

                <input
                  id="contactName"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactEmail">Email Address</label>

                <input
                  id="contactEmail"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactMessage">Message</label>

                <textarea
                  id="contactMessage"
                  name="message"
                  rows="6"
                  placeholder="Write your message"
                  required
                />
              </div>

              <button type="submit" className="form-submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;