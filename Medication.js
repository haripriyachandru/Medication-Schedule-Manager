import React, { useState } from 'react';

const Medication = () => {
  const [medications, setMedications] = useState([
    { name: 'Aspirin', time: '8:00 AM' },
    { name: 'Vitamin C', time: '12:00 PM' },
    { name: 'Ibuprofen', time: '6:00 PM' },
  ]);

  return (
    <div className="medication-container">
      <h2>Your Medication Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Medication</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {medications.map((med, index) => (
            <tr key={index}>
              <td>{med.name}</td>
              <td>{med.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medication;
