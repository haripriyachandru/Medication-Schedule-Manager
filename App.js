import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './components/Login';
import Medication from './components/Medication';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/" element={<h1>Welcome to Medication App</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
