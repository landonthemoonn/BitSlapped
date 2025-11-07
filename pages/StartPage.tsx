import React from 'react';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Page } from '../types';

interface StartPageProps {
  onNavigate: (page: Page) => void;
}

export const StartPage: React.FC<StartPageProps> = ({ onNavigate }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-full">
      <Logo />
      <div className="mt-8 space-y-4 w-full max-w-xs">
          <Button variant="tertiary" onClick={() => onNavigate('camera')}>QUEEN CAM</Button>
          <Button variant="tertiary" disabled>ILLUSIONS GALLERY</Button>
      </div>
    </div>
  );
};
