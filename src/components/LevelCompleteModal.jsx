import React from 'react';
import '../styles/LevelCompleteModal.css';

const LevelCompleteModal = ({ 
  success, 
  level, 
  matchedPairs, 
  totalPairs, 
  timeLeft,
  onNextLevel,
  onRetry,
  onBack
}) => {
  return (
    <div className="modal-overlay">
      <div className="level-complete-modal">
        <div className="modal-header">
          {success ? (
            <>
              <h2 className="success-title">关卡完成！</h2>
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
            </>
          ) : (
            <>
              <h2 className="fail-title">时间到！</h2>
              <div className="fail-icon">
                <i className="fas fa-times-circle"></i>
              </div>
            </>
          )}
        </div>
        
        <div className="modal-content">
          <h3>{level.name}</h3>
          
          <div className="level-stats">
            <div className="stat-item">
              <i className="fas fa-layer-group"></i>
              <span>配对：{matchedPairs}/{totalPairs}</span>
            </div>
            <div className="stat-item">
              <i className="fas fa-clock"></i>
              <span>剩余时间：{timeLeft}s</span>
            </div>
          </div>
          
          {success && (
            <div className="knowledge-card">
              <h4><i className="fas fa-lightbulb"></i> 编程知识</h4>
              <p>{level.knowledge}</p>
            </div>
          )}
        </div>
        
        <div className="modal-actions">
          {success && (
            <button className="next-button" onClick={onNextLevel}>
              下一关 <i className="fas fa-arrow-right"></i>
            </button>
          )}
          
          <button className="retry-button" onClick={onRetry}>
            {success ? '再玩一次' : '重试'} <i className="fas fa-redo"></i>
          </button>
          
          <button className="back-button" onClick={onBack}>
            返回关卡 <i className="fas fa-home"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelCompleteModal;
