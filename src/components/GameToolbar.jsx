import React from 'react';
import '../styles/GameToolbar.css';

const GameToolbar = ({ onHint, onCompiler, hintUsed, compilerUsed }) => {
  return (
    <div className="game-toolbar">
      <button 
        className={`tool-button hint-button ${hintUsed ? 'used' : ''}`}
        onClick={onHint}
        disabled={hintUsed}
      >
        <i className="fas fa-search"></i>
        <span>代码调试器</span>
      </button>
      
      <button 
        className={`tool-button compiler-button ${compilerUsed ? 'used' : ''}`}
        onClick={onCompiler}
        disabled={compilerUsed}
      >
        <i className="fas fa-magic"></i>
        <span>编译器</span>
      </button>
    </div>
  );
};

export default GameToolbar;
