import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputForm from "./InputForm";
import FormPreview from './FormPreview';

const Routing2 = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<InputForm formData={formData} setFormData={setFormData} />} 
        />
        <Route 
          path="/preview" 
          element={<FormPreview formData={formData} />} 
        />
      </Routes>
    </Router>
  )
}

export default Routing2;