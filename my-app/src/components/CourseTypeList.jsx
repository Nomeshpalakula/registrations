import React from 'react';

function CourseTypeList({ courseTypes }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {courseTypes.map((type) => (
          <tr key={type.id}>
            <td>{type.id}</td>
            <td>{type.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CourseTypeList;