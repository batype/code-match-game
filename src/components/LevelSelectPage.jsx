import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from '../context/GameContext';
import { levels } from '../data/levels';
import '../styles/LevelSelectPage.css';

const LevelSelectPage = () => {
  const navigate = useNavigate();
  const { gameState } = useContext(GameContext);
  
  return (
    <div className="level-select-page">
      <h1>选择关卡</h1>
      <div className="levels-container">
        {levels.map((level) => (
          <div 
            key={level.id}
            className={`level-card ${level.id <= gameState.unlockedLevels ? 'unlocked' : 'locked'}`}
            onClick={() => {
              if (level.id <= gameState.unlockedLevels) {
                navigate(`/game/${level.id}`);
              }
            }}
          >
            <div className="level-icon">
              <img src={level.icon} alt={level.name} />
            </div>
            <div className="level-info">
              <h3>{level.name}</h3>
              <p>{level.description}</p>
            </div>
            {level.id > gameState.unlockedLevels && (
              <div className="lock-overlay">
                <i className="fas fa-lock"></i>
              </div>
            )}
            {gameState.completedLevels.includes(level.id) && (
              <div className="completed-badge">
                <i className="fas fa-check-circle"></i>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate('/')}>
        返回主页
      </button>
    </div>
  );
};

export default LevelSelectPage;
