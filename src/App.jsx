import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import LevelSelectPage from './components/LevelSelectPage';
import CollectionPage from './components/CollectionPage';
import GameContext from './context/GameContext';

const App = () => {
  const [gameState, setGameState] = useState({
    currentLevel: 1,
    unlockedLevels: 1,
    score: 0,
    collection: {},
    completedLevels: []
  });

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/levels" element={<LevelSelectPage />} />
          <Route path="/game/:levelId" element={<GamePage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </div>
    </GameContext.Provider>
  );
};

export default App;
