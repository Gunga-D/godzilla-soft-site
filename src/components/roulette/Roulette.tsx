import React, { useState, useRef, useEffect } from 'react';
import './RouletteStyle.css';

interface RandomGame {
  name: string;
  imageUrl: string;
}

const indieGames: RandomGame[] = [
    {
      name: 'Beholder',
      imageUrl: 'https://disk.godzillasoft.ru/beholder_pc-game_box_500px.png'
    },
    {
      name: 'DOOM Eternal',
      imageUrl: 'https://disk.godzillasoft.ru/doom_eternal-500x500.jpg'
    },
    {
      name: 'Mortal Kombat 11',
      imageUrl: 'https://disk.godzillasoft.ru/MortalKombat11.png'
    },
    {
      name: 'Arma 3',
      imageUrl: 'https://disk.godzillasoft.ru/arma_3-square (1).jpg'
    },
    {
      name: 'Squad',
      imageUrl: 'https://disk.godzillasoft.ru/squad.png'
    },
    {
      name: 'DARK SOULS™ III',
      imageUrl: 'https://disk.godzillasoft.ru/DarkSouls3.jpg'
    },
    {
      name: 'Sniper Elite 3',
      imageUrl: 'https://disk.godzillasoft.ru/ezgif-7b1fec2f0d47ab.png'
    },
    {
      name: "Love Money Rock'n'Roll",
      imageUrl: 'https://disk.godzillasoft.ru/artworks-dh2RaHEaQVZPYB73-Xl3phA-t500x500.jpg'
    },
    {
      name: 'Metro Exodus',
      imageUrl: 'https://disk.godzillasoft.ru/metro_exodus_500x500.jpg'
    },
    {
      name: 'No Mans Sky',
      imageUrl: 'https://disk.godzillasoft.ru/No-Mans-Sky.png'
    },
    {
        name: 'Ready or Not',
        imageUrl: 'https://disk.godzillasoft.ru/ready_or_not_pc-game_box_500px.png'
    },
    {
        name: 'Days Gone',
        imageUrl: 'https://disk.godzillasoft.ru/DaysGone.png'
    },
    {
        name: 'Dead Cells',
        imageUrl: 'https://disk.godzillasoft.ru/deadCellsSquare.jpg'
    }
];

const premiumGames: RandomGame[] = []

const adultGames: RandomGame[] = []

type RouletteProps = {
    randomType: string;
};

const Roulette = (props: RouletteProps) => {
  let games: RandomGame[] = indieGames
  if (props.randomType == 'premium') {
    games = premiumGames
  }
  if (props.randomType == '18+') {
    games = adultGames
  }

  const [selectedGame, setSelectedGame] = useState<RandomGame | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningIndex, setWinningIndex] = useState<number | null>(null);
  const rouletteRef = useRef<HTMLDivElement>(null);
  const spinTimeoutRef = useRef<NodeJS.Timeout>();

  const spinRoulette = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setSelectedGame(null);
    setWinningIndex(null);
    
    const randomIndex = Math.floor(Math.random() * games.length);
    
    if (rouletteRef.current) {
      rouletteRef.current.style.transition = 'none';
      rouletteRef.current.style.transform = 'translateX(0)';
      
      setTimeout(() => {
        if (rouletteRef.current) {
          const gameCardWidth = 320; // Ширина карточки игры + margin
          const containerWidth = rouletteRef.current.parentElement?.clientWidth || 0;
          const centerPosition = containerWidth / 2 - gameCardWidth / 2;
          
          const targetPosition = randomIndex * gameCardWidth + 
                                (games.length * gameCardWidth) * 2 - 
                                centerPosition;
          
          rouletteRef.current.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.21, 0.99)';
          rouletteRef.current.style.transform = `translateX(-${targetPosition}px)`;
        }
      }, 10);
    }
    
    spinTimeoutRef.current = setTimeout(() => {
      setSelectedGame(games[randomIndex]);
      setWinningIndex(randomIndex);
      setIsSpinning(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (spinTimeoutRef.current) {
        clearTimeout(spinTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="steam-roulette-container">
      <h2>Steam Игровая Рулетка</h2>
      
      <div className="roulette-wrapper">
        <div className="pointer"></div>
        <div className="roulette" ref={rouletteRef}>
          {[...games, ...games, ...games].map((game, index) => (
            <div 
              key={index} 
              className={`game-card ${winningIndex !== null && index % games.length === winningIndex ? 'winner' : ''}`}
            >
              <img src={game.imageUrl} alt={game.name} className="RouletteGameThumbnail" />
              <div className="game-name">{game.name}</div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={spinRoulette} 
        disabled={isSpinning}
        className="RouletteSpinButton"
      >
        {isSpinning ? 'Крутится...' : 'Крутить рулетку'}
      </button>
      
      {selectedGame && (
        <div className="result">
          <h3>Выпала игра:</h3>
          <div className="selected-game">
            <img src={selectedGame.imageUrl} alt={selectedGame.name} className="selected-game-image" />
            <div className="selected-game-name">{selectedGame.name}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roulette;