import { Link, useParams } from "react-router-dom";
import courses from "../../data/Courses";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((item) => String(item.id) === String(id));

  if (!course) {
    return (
      <section className="course-details-not-found">
        <div className="container">
          <h1>Course Not Found</h1>
          <p>The course you are looking for does not exist.</p>

          <Link className="back-button" to="/courses">
            Back to Courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="course-details">
      <div className="container">
        <Link className="back-link" to="/courses">
          ← Back to Courses
        </Link>

        <div className="course-details-card">
          <span className="course-level">{course.level}</span>

          <h1>{course.title}</h1>

          <p className="course-description">
            {course.description}
          </p>

          <div className="course-meta">
            <div>
              <span>Duration</span>
              <strong>{course.duration}</strong>
            </div>
          </div>

          <Link className="register-button" to="/registration">
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;