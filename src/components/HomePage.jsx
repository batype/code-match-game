import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="logo-container">
        <h1 className="game-title">码了个码</h1>
        <div className="subtitle">编程语言消除大挑战</div>
      </div>
      
      <div className="menu-container">
        <button 
          className="menu-button start-button" 
          onClick={() => navigate('/levels')}
        >
          开始游戏
        </button>
        <button 
          className="menu-button collection-button" 
          onClick={() => navigate('/collection')}
        >
          知识图鉴
        </button>
      </div>
      
      <div className="game-intro">
        <h2>游戏介绍</h2>
        <p>《码了个码》是一款以编程语言为主题的趣味消除游戏。</p>
        <p>通过配对相同的编程元素消除它们，解锁编程知识，提升你的编程技能！</p>
        <div className="game-features">
          <div className="feature">
            <i className="fas fa-code"></i>
            <span>编程语言主题</span>
          </div>
          <div className="feature">
            <i className="fas fa-trophy"></i>
            <span>关卡挑战</span>
          </div>
          <div className="feature">
            <i className="fas fa-book"></i>
            <span>知识收集</span>
          </div>
        </div>
      </div>
      
      <footer className="home-footer">
        <p>© 2023 码了个码 | 一款编程主题消除类游戏</p>
      </footer>
    </div>
  );
};

export default HomePage;
