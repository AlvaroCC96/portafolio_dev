import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainProfile from './pages/MainProfile';
import DevMode from './pages/DevMode';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainProfile />} />
        <Route path="/dev" element={<DevMode />} />
      </Routes>
    </Router>
  );
}

export default App;