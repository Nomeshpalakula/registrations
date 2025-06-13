import React from 'react';

function CourseOfferingList({ offerings }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Course ID</th>
          <th>Semester</th>
        </tr>
      </thead>
      <tbody>
        {offerings.map((offering) => (
          <tr key={offering.id}>
            <td>{offering.id}</td>
            <td>{offering.courseId}</td>
            <td>{offering.semester}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CourseOfferingList;