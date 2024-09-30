import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputForm from "./components/InputForm";
import FormPreview from './components/FormPreview';
import { FormProvider } from './FormContext';

const App = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/preview" element={<FormPreview />} />
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;