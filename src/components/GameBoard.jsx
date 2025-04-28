import React from 'react';
import Card from './Card';
import '../styles/GameBoard.css';

const GameBoard = ({ cards, selectedCards, onCardSelect, layout }) => {
  // 根据关卡布局设置网格样式
  const gridStyle = {
    gridTemplateColumns: `repeat(${layout.columns}, 1fr)`,
    gridTemplateRows: `repeat(${layout.rows}, 1fr)`,
  };
  
  return (
    <div className="game-board" style={gridStyle}>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          isSelected={selectedCards.includes(card.id)}
          onSelect={() => onCardSelect(card.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
