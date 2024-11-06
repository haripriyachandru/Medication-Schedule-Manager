import React, { useState } from 'react';
import { addMedication } from '../services/api';

const MedicationForm = ({ token, setMedications }) => {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');
  const [nextDose, setNextDose] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addMedication(
        { name, dosage, frequency, nextDose },
        token
      );
      setMedications((prev) => [...prev, data]);
      setName('');
      setDosage('');
      setFrequency('');
      setNextDose('');
    } catch (error) {
      console.error('Error adding medication:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Medication Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Dosage"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Frequency"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        placeholder="Next Dose"
        value={nextDose}
        onChange={(e) => setNextDose(e.target.value)}
        required
      />
      <button type="submit">Add Medication</button>
    </form>
  );
};

export default MedicationForm;
