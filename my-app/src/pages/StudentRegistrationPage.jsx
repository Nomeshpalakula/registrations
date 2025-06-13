import React, { useState } from 'react';
import StudentRegistrationForm from '../components/StudentRegistrationForm';
import { courseOfferings } from '../data/mockData';

function StudentRegistrationPage() {
  const [registrations, setRegistrations] = useState([]);

  const handleRegister = (newReg) => {
    setRegistrations([...registrations, newReg]);
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <StudentRegistrationForm offerings={courseOfferings} onRegister={handleRegister} />
      <h3>Registered Students</h3>
      <ul>
        {registrations.map((reg) => (
          <li key={reg.id}>
            {reg.studentName} - Offering ID: {reg.offeringId}, Date: {reg.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentRegistrationPage;