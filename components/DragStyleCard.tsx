
import React from 'react';
import { DragStyle } from '../types';

interface DragStyleCardProps {
  styleInfo: DragStyle;
  onSelect: (style: DragStyle) => void;
  isSelected: boolean;
}

export const DragStyleCard: React.FC<DragStyleCardProps> = ({ styleInfo, onSelect, isSelected }) => {
  const selectedClasses = isSelected 
    ? 'border-cyan-300 box-glow-cyan scale-105' 
    : 'border-pink-500 hover:border-cyan-300 hover:scale-105';

  return (
    <div
      onClick={() => onSelect(styleInfo)}
      className={`bg-black bg-opacity-40 border-2 ${selectedClasses} p-4 rounded-lg cursor-pointer transition-all duration-300 h-full flex flex-col`}
    >
      <h3 className="text-2xl text-pink-400 font-bold tracking-wider text-glow">{styleInfo.name}</h3>
      <p className="text-cyan-200 mt-2 text-sm italic">"{styleInfo.energy}"</p>
      <p className="text-white mt-3 text-base flex-grow">{styleInfo.keywords}</p>
    </div>
  );
};
