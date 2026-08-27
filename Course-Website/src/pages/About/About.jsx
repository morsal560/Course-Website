import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="section-label">About Us</span>

          <h1>About Our Course</h1>

          <p>
            We are committed to providing accessible and practical
            learning opportunities for students who want to develop
            valuable skills.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container about-grid">
          <div>
            <span className="section-label">Who We Are</span>

            <h2>Learning That Creates Opportunities</h2>

            <p>
              Our course center focuses on helping students learn useful
              skills in a supportive and friendly environment.
            </p>

            <p>
              We offer courses in areas such as English, web design, and
              computer skills. Our goal is to help students gain knowledge
              and confidence for their future.
            </p>
          </div>

          <div className="about-box">
            <h3>Why Choose Us?</h3>

            <ul>
              <li>Practical and useful courses</li>
              <li>Supportive learning environment</li>
              <li>Courses for different skill levels</li>
              <li>Focus on student development</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Start Your Learning Journey</h2>

          <p>
            Explore our courses and find the right opportunity for you.
          </p>

          <Link to="/courses" className="primary-button">
            Explore Courses
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;