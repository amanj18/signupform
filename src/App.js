import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPreview from './components/FormPreview';
import InputForm from './components/InputForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="/preview" element={<FormPreview />} />
      </Routes>
    </Router>
  );
};

export default App;