import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputForm from "./InputForm";
import FormPreview from './FormPreview';
import { FormProvider } from '../FormContext';

const Routing = () => {
  return (
    <FormProvider>
    <Router>
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="/preview" element={<FormPreview />} />
      </Routes>
    </Router>
  </FormProvider>
  )
}

export default Routing