import React, { useState, useEffect } from 'react';
import { fetchMedications } from '../services/api';
import MedicationForm from './MedicationForm';
import MedicationList from './MedicationList';

const Dashboard = () => {
  const [medications, setMedications] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getMedications = async () => {
      try {
        const { data } = await fetchMedications(token);
        setMedications(data);
      } catch (error) {
        console.error('Error fetching medications:', error.message);
      }
    };
    getMedications();
  }, [token]);

  return (
    <div>
      <h2>Dashboard</h2>
      <MedicationForm token={token} setMedications={setMedications} />
      <MedicationList medications={medications} />
    </div>
  );
};

export default Dashboard;
