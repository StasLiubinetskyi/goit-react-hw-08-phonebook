import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

const Routes = () => {
  return (
    <div>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<Navigate to="/" />} />
    </div>
  );
};

export default Routes;
