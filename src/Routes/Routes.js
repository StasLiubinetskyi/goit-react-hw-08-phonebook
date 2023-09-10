import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pagesAbout';
import Contact from '../pagesContact';

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
