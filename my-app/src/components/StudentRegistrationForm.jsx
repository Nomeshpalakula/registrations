import React, { useState } from 'react';
function StudentRegistrationForm({ offerings, onRegister }) {
  const [studentName, setStudentName] = useState('');
  const [offeringId, setOfferingId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName || !offeringId) return;

    const newRegistration = {
      id: Date.now(),
      studentName,
      offeringId: Number(offeringId),
      date: new Date().toISOString().split('T')[0],
    };

    onRegister(newRegistration);
    setStudentName('');
    setOfferingId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      />
      <select
        value={offeringId}
        onChange={(e) => setOfferingId(e.target.value)}
        required
      >
         <option value="">Select Offering</option>
        {offerings.map((offering) => (
          <option key={offering.id} value={offering.id}>
            {offering.semester} - Course ID: {offering.courseId}
          </option>
        ))}
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default StudentRegistrationForm;