import { Link } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-card-content">
        <span className="course-card-level">{course.level}</span>

        <h3>{course.title}</h3>

        <p>{course.description}</p>

        <div className="course-card-info">
          <span>Duration: {course.duration}</span>
        </div>

        <Link
          to={`/courses/${course.id}`}
          className="course-card-button"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default CourseCard;