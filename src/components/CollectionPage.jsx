import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from '../context/GameContext';
import { levels } from '../data/levels';
import '../styles/CollectionPage.css';

const CollectionPage = () => {
  const navigate = useNavigate();
  const { gameState } = useContext(GameContext);
  
  const languageData = levels.map(level => ({
    id: level.id,
    name: level.name,
    language: level.language,
    icon: level.icon,
    knowledge: level.knowledge,
    unlocked: gameState.collection[level.language] || false
  }));
  
  return (
    <div className="collection-page">
      <h1>知识图鉴</h1>
      <p className="collection-intro">
        收集不同编程语言的知识卡片，了解它们的特点和用途！
      </p>
      
      <div className="collection-stats">
        <div className="stat-item">
          <i className="fas fa-book"></i>
          <span>已收集: {Object.values(gameState.collection).filter(Boolean).length}/{levels.length}</span>
        </div>
      </div>
      
      <div className="collection-grid">
        {languageData.map((item) => (
          <div 
            key={item.id}
            className={`collection-card ${item.unlocked ? 'unlocked' : 'locked'}`}
          >
            <div className="card-icon">
              <img src={item.icon} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            
            {item.unlocked ? (
              <div className="card-content">
                <p>{item.knowledge}</p>
              </div>
            ) : (
              <div className="locked-overlay">
                <i className="fas fa-lock"></i>
                <p>完成对应关卡解锁</p>
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

export default CollectionPage;
