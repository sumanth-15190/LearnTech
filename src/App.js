import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import CourseDetail from "./pages/CourseDetail";
import LessonDetail from "./pages/LessonDetail";

function MainRouter() {
  const location = useLocation();
  const hideNavbar = ["/signin", "/signup"];
  const shouldHide = hideNavbar.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}

      <Routes>
        {/* 🌐 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/course/:courseId/lesson/:lessonId" element={<LessonDetail />} />

        {/* 🔐 PROTECTED ROUTES */}
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
