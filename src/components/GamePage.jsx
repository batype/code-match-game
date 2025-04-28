import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GameContext from '../context/GameContext';
import { levels } from '../data/levels';
import GameBoard from './GameBoard';
import GameToolbar from './GameToolbar';
import LevelCompleteModal from './LevelCompleteModal';
import '../styles/GamePage.css';

const GamePage = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const { gameState, setGameState } = useContext(GameContext);
  
  const [currentLevel, setCurrentLevel] = useState(null);
  const [gameCards, setGameCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [totalPairs, setTotalPairs] = useState(0);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [compilerUsed, setCompilerUsed] = useState(false);

  // 初始化关卡
  useEffect(() => {
    const level = levels.find(l => l.id === parseInt(levelId));
    if (!level) {
      navigate('/levels');
      return;
    }
    
    setCurrentLevel(level);
    setTimeLeft(level.timeLimit);
    
    // 生成游戏卡片
    const cards = generateGameCards(level);
    setGameCards(cards);
    setTotalPairs(cards.length / 2);
    setMatchedPairs(0);
    setSelectedCards([]);
    setIsLevelComplete(false);
    setHintUsed(false);
    setCompilerUsed(false);
  }, [levelId, navigate]);

  // 倒计时
  useEffect(() => {
    if (!timeLeft || isLevelComplete) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, isLevelComplete]);

  // 检查游戏是否结束
  useEffect(() => {
    if (matchedPairs === totalPairs && totalPairs > 0) {
      setIsLevelComplete(true);
      
      // 更新游戏状态
      setGameState(prev => {
        const completedLevels = [...prev.completedLevels];
        if (!completedLevels.includes(parseInt(levelId))) {
          completedLevels.push(parseInt(levelId));
        }
        
        return {
          ...prev,
          score: prev.score + currentLevel.points,
          unlockedLevels: Math.max(prev.unlockedLevels, parseInt(levelId) + 1),
          completedLevels,
          collection: {
            ...prev.collection,
            [currentLevel.language]: true
          }
        };
      });
    }
  }, [matchedPairs, totalPairs, levelId, setGameState, currentLevel]);

  // 处理卡片选择
  const handleCardSelect = (cardId) => {
    if (selectedCards.length === 2 || isLevelComplete || timeLeft === 0) return;
    
    // 如果卡片已经匹配，不做任何处理
    const card = gameCards.find(c => c.id === cardId);
    if (card.matched) return;
    
    // 如果卡片已经被选中，不做任何处理
    if (selectedCards.some(id => id === cardId)) return;
    
    const newSelected = [...selectedCards, cardId];
    setSelectedCards(newSelected);
    
    // 如果选中了两张卡片，检查是否匹配
    if (newSelected.length === 2) {
      const card1 = gameCards.find(c => c.id === newSelected[0]);
      const card2 = gameCards.find(c => c.id === newSelected[1]);
      
      if (card1.type === card2.type && card1.value === card2.value) {
        // 匹配成功
        setGameCards(prev => prev.map(c => 
          newSelected.includes(c.id) ? { ...c, matched: true } : c
        ));
        setMatchedPairs(prev => prev + 1);
        setSelectedCards([]);
      } else {
        // 匹配失败，延迟清除选择
        setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  // 使用提示道具
  const useHint = () => {
    if (hintUsed || isLevelComplete || timeLeft === 0) return;
    
    // 找到未匹配的卡片对
    const unmatched = gameCards.filter(c => !c.matched);
    if (unmatched.length <= 0) return;
    
    // 随机选择一对卡片进行提示
    const types = [...new Set(unmatched.map(c => c.type))];
    const selectedType = types[Math.floor(Math.random() * types.length)];
    const pairCards = unmatched.filter(c => c.type === selectedType);
    
    if (pairCards.length >= 2) {
      const hintCard1 = pairCards[0];
      const hintCard2 = pairCards[1];
      
      // 高亮显示提示的卡片
      setGameCards(prev => prev.map(c => 
        (c.id === hintCard1.id || c.id === hintCard2.id) 
          ? { ...c, hinted: true } 
          : c
      ));
      
      // 3秒后移除提示
      setTimeout(() => {
        setGameCards(prev => prev.map(c => 
          c.hinted ? { ...c, hinted: false } : c
        ));
      }, 3000);
      
      setHintUsed(true);
    }
  };

  // 使用编译器道具
  const useCompiler = () => {
    if (compilerUsed || isLevelComplete || timeLeft === 0) return;
    
    // 找到未匹配的卡片
    const unmatched = gameCards.filter(c => !c.matched);
    if (unmatched.length <= 0) return;
    
    // 随机选择一对卡片进行消除
    const types = [...new Set(unmatched.map(c => c.type))];
    const selectedType = types[Math.floor(Math.random() * types.length)];
    const pairCards = unmatched.filter(c => c.type === selectedType).slice(0, 2);
    
    if (pairCards.length === 2) {
      // 自动匹配这对卡片
      setGameCards(prev => prev.map(c => 
        pairCards.some(p => p.id === c.id) ? { ...c, matched: true } : c
      ));
      setMatchedPairs(prev => prev + 1);
      setCompilerUsed(true);
    }
  };

  // 生成游戏卡片
  const generateGameCards = (level) => {
    const cards = [];
    const pairs = level.pairs;
    
    // 为每对卡片创建两张相同的卡片
    pairs.forEach((pair, index) => {
      cards.push({
        id: `card-${index}-a`,
        type: pair.type,
        value: pair.value,
        image: pair.image,
        matched: false,
        hinted: false
      });
      cards.push({
        id: `card-${index}-b`,
        type: pair.type,
        value: pair.value,
        image: pair.image,
        matched: false,
        hinted: false
      });
    });
    
    // 随机打乱卡片顺序
    return shuffleArray(cards);
  };

  // 随机打乱数组顺序
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  if (!currentLevel) {
    return <div className="loading">加载中...</div>;
  }

  return (
    <div className="game-page" style={{ 
      backgroundImage: `url(${currentLevel.background})`,
      backgroundColor: currentLevel.backgroundColor || '#1e1e2e'
    }}>
      <div className="game-header">
        <h2>{currentLevel.name}</h2>
        <div className="game-stats">
          <div className="time-left">
            <i className="fas fa-clock"></i> {timeLeft}s
          </div>
          <div className="pairs-matched">
            <i className="fas fa-layer-group"></i> {matchedPairs}/{totalPairs}
          </div>
        </div>
      </div>
      
      <GameBoard 
        cards={gameCards} 
        selectedCards={selectedCards}
        onCardSelect={handleCardSelect}
        layout={currentLevel.layout}
      />
      
      <GameToolbar 
        onHint={useHint} 
        onCompiler={useCompiler}
        hintUsed={hintUsed}
        compilerUsed={compilerUsed}
      />
      
      <button className="back-button" onClick={() => navigate('/levels')}>
        退出关卡
      </button>
      
      {(isLevelComplete || timeLeft === 0) && (
        <LevelCompleteModal 
          success={isLevelComplete}
          level={currentLevel}
          matchedPairs={matchedPairs}
          totalPairs={totalPairs}
          timeLeft={timeLeft}
          onNextLevel={() => {
            const nextLevelId = parseInt(levelId) + 1;
            if (nextLevelId <= levels.length) {
              navigate(`/game/${nextLevelId}`);
            } else {
              navigate('/levels');
            }
          }}
          onRetry={() => {
            navigate(0); // 刷新当前页面
          }}
          onBack={() => navigate('/levels')}
        />
      )}
    </div>
  );
};

export default GamePage;
