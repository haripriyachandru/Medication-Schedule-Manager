import React from 'react';

const MedicationList = ({ medications }) => (
  <div>
    <h3>Your Medications</h3>
    <ul>
      {medications.map((med) => (
        <li key={med._id}>
          <strong>{med.name}</strong> - {med.dosage}, every {med.frequency} (Next dose: {new Date(med.nextDose).toLocaleString()})
        </li>
      ))}
    </ul>
  </div>
);

export default MedicationList;
