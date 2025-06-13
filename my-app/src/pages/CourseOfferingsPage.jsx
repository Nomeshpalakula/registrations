import React from 'react';
import CourseOfferingList from '../components/CourseOfferingList';
import { courseOfferings } from '../data/mockData';

function CourseOfferingsPage() {
  return (
    <div>
      <h2>Course Offerings</h2>
      <CourseOfferingList offerings={courseOfferings} />
    </div>
  );
}

export default CourseOfferingsPage;