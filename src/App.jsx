
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Page1 from './pages/Page1';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="page" element={<Page1 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

