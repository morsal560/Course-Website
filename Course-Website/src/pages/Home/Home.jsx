import { Link } from "react-router-dom";
import courses from "../../data/courses";
import CourseCard from "../../components/courses/CourseCard/CourseCard";
import "./Home.css";

function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-label">Welcome to Course Website</span>

            <h1>Learn Today, Build Your Future</h1>

            <p>
              Discover practical courses designed to help you learn new
              skills and achieve your goals.
            </p>

            <div className="hero-actions">
              <Link to="/courses" className="primary-button">
                Explore Courses
              </Link>

              <Link to="/registration" className="secondary-button">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="introduction">
        <div className="container intro-content">
          <span className="section-label">About Our Courses</span>

          <h2>Learn Skills That Matter</h2>

          <p>
            We provide practical and accessible courses to help students
            develop useful skills for education, work, and personal growth.
          </p>
        </div>
      </section>

      <section className="featured-courses">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">Our Courses</span>
              <h2>Popular Courses</h2>
            </div>

            <Link to="/courses" className="view-all-link">
              View All Courses →
            </Link>
          </div>

          <div className="home-course-grid">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container cta-content">
          <h2>Ready to Start Learning?</h2>

          <p>
            Choose a course and take the first step toward your goals.
          </p>

          <Link to="/registration" className="primary-button">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;