import React from 'react';
import LandingPage from './components/landingPage';
import './App.css';
import { Navigate } from 'react-router-dom';
import WinningPrize from './components/winningPrize';
import Trivia from './components/trivia';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
        <Route path="/game" element={<Trivia />} /> {/* Trivia game page route */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Winning-prize" element={<WinningPrize />} />
      </Routes>
    </div>
  );
}

export default App;
