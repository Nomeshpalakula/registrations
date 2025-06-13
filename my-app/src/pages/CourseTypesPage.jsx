import React from 'react';
import CourseTypeList from '../components/CourseTypeList';
import { courseTypes } from '../data/mockData';

function CourseTypesPage() {
  return (
    <div>
      <h2>Course Types</h2>
      <CourseTypeList courseTypes={courseTypes} />
    </div>
  );
}

export default CourseTypesPage;