import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Courses from "./pages/Courses/Course";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Registration from "./pages/Registration/Registration";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/about" element={<About/>} />

          <Route path="/courses" element={<Courses/>} />

          <Route
            path="/courses/:id"
            element={<CourseDetails/>}
          />

          <Route
            path="/registration"
            element={<Registration/>}
          />

          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;