import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TournamentsPage from './components/TournamentsPage';
import TournamentDetailsPage from './components/TournamentDetailsPage';
import MainNavigationBar from './components/MainNavigationBar';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <MainNavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/tournament/:id" element={<TournamentDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
