import React from 'react';

function CourseList({ courses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type ID</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.name}</td>
            <td>{course.typeId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CourseList;