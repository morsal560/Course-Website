import RegistrationForm from "../../components/forms/RegistrationForm/RegistrationForm";
import "./Registration.css";

function Registration() {
  return (
    <div className="registration-page">
      <section className="registration-header">
        <div className="container">
          <span className="section-label">Registration</span>

          <h1>Register for a Course</h1>

          <p>
            Fill out the form below and submit your registration request.
          </p>
        </div>
      </section>

      <section className="registration-content">
        <div className="container">
          <RegistrationForm />
        </div>
      </section>
    </div>
  );
}

export default Registration;