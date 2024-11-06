import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (userData) => api.post('/auth/login', userData);
export const fetchMedications = (token) =>
  api.get('/medications', {
    headers: { Authorization: `Bearer ${token}` },
  });
export const addMedication = (medicationData, token) =>
  api.post('/medications', medicationData, {
    headers: { Authorization: `Bearer ${token}` },
  });
