import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseTypesPage from './pages/CourseTypesPage';
import CoursesPage from './pages/CoursesPage';
import CourseOfferingsPage from './pages/CourseOfferingsPage';
import StudentRegistrationPage from './pages/StudentRegistrationPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/course-types">Course Types</Link> |&nbsp;
        <Link to="/courses">Courses</Link> |&nbsp;
        <Link to="/offerings">Course Offerings</Link> |&nbsp;
        <Link to="/register">Student Registration</Link>
      </nav>

      <Routes>
        <Route path="/course-types" element={<CourseTypesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/offerings" element={<CourseOfferingsPage />} />
        <Route path="/register" element={<StudentRegistrationPage />} />
        <Route path="/" element={<StudentRegistrationPage />} />
      </Routes>
     </Router>
  );
}

export default App;