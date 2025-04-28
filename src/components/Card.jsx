import React from 'react';
import '../styles/Card.css';

const Card = ({ card, isSelected, onSelect }) => {
  const cardClasses = [
    'game-card',
    card.matched ? 'matched' : '',
    isSelected ? 'selected' : '',
    card.hinted ? 'hinted' : ''
  ].filter(Boolean).join(' ');
  
  return (
    <div className={cardClasses} onClick={onSelect}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-icon">
            <i className="fas fa-code"></i>
          </div>
        </div>
        <div className="card-back">
          {card.image ? (
            <img src={card.image} alt={card.value} />
          ) : (
            <div className="card-value">{card.value}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
