import courses from "../../data/courses";
import CourseList from "../../components/courses/CourseList/CourseList";

function Courses() {
  return (
    <section>
      <div className="container">
        <h1>Our Courses</h1>

        <p>
          Explore our courses and choose the one that is right for you.
        </p>

        <CourseList courses={courses} />
      </div>
    </section>
  );
}

export default Courses;