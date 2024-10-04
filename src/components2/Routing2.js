import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import InputForm from "./InputForm";
import FormPreview from './FormPreview';

const Routing2 = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <InputForm formData={formData} setFormData={setFormData} />,
    },
    {
      path: "/preview",
      element: <FormPreview formData={formData} />,
    },
  ]);
  
  
  //   return (
    //     <Router>
    //       <Routes>
    //         <Route 
    //           path="/" 
    //           element={<InputForm formData={formData} setFormData={setFormData} />} 
    //         />
    //         <Route 
    //           path="/preview" 
    //           element={<FormPreview formData={formData} />} 
    //         />
    //       </Routes>
    //     </Router>
    //   )
    // }
    
  return (
    <RouterProvider router={router} />
  );
}

export default Routing2;