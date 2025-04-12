import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './pages/Page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/technical-support" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;