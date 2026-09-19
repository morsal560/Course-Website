import CourseCard from "../CourseCard/CourseCard";
import "./CourseList.css";

function CourseList({ courses }) {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;