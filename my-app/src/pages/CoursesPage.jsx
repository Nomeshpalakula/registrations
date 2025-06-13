import React from 'react';
import CourseList from '../components/CourseList';
import { courses } from '../data/mockData';

function CoursesPage() {
  return (
    <div>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </div>
  );
}

export default CoursesPage;