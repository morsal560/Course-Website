import { useState } from "react";
import "./RegistrationForm.css";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

function RegistrationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <div className="registration-form-wrapper">
      {submitted && (
        <div className="success-message">
          Your registration has been submitted successfully.
        </div>
      )}

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Choose a Course</label>

          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            <option value="english">English Course</option>
            <option value="web-design">Web Design</option>
            <option value="computer">Computer Course</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message (optional)"
            rows="5"
          />
        </div>

        <button type="submit" className="form-submit-button">
          Submit Registration
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;