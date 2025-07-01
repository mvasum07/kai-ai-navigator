
import React from 'react';
import { Brain } from 'lucide-react';

const BrainstormingWidget = ({ style }: { style?: React.CSSProperties }) => {
  const games = [
    { name: 'Tic-tac-toe', icon: '❌⭕' },
    { name: 'Chess', icon: '♟️' },
    { name: 'Sudoku', icon: '🔢' }
  ];

  return (
    <div 
      className="h-full flex flex-col"
      style={style}
    >
      <div className="flex items-center gap-2 mb-3">
        <Brain className="text-white" size={20} />
        <h2 className="text-white font-bold text-lg">Brainstorming</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-2 flex-1">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-white/20 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
          >
            <div className="text-2xl mb-1">{game.icon}</div>
            <div className="text-white text-xs text-center">{game.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrainstormingWidget;
