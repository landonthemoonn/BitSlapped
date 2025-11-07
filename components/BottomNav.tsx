import React from 'react';
import { Page } from '../types';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => {
  const activeClasses = isActive ? 'text-cyan-300 scale-110' : 'text-white';
  
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-16 h-16 transition-transform transform hover:scale-110 active:scale-95 ${activeClasses}`}
    >
      <div className="w-8 h-8">{icon}</div>
      <span className="text-xs tracking-wider mt-1">{label}</span>
    </button>
  );
};

interface BottomNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentPage, onNavigate }) => {
  const cameraIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
  const heartIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>;
  const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
  const profileIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
  const galleryIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 z-50">
      <div className="w-full max-w-sm mx-auto h-20 rounded-full bg-pink-500/30 backdrop-blur-md box-glow flex justify-around items-center px-2">
        <NavItem icon={cameraIcon} label="CAMERA" isActive={currentPage === 'camera'} onClick={() => onNavigate('camera')} />
        <NavItem icon={heartIcon} label="FAVES" isActive={currentPage === 'favorites'} onClick={() => onNavigate('favorites')} />
        <NavItem icon={homeIcon} label="HOME" isActive={currentPage === 'home'} onClick={() => onNavigate('home')} />
        <NavItem icon={profileIcon} label="PROFILE" isActive={currentPage === 'profile'} onClick={() => onNavigate('profile')} />
        <NavItem icon={galleryIcon} label="GALLERY" isActive={currentPage === 'gallery'} onClick={() => onNavigate('gallery')} />
      </div>
    </footer>
  );
};
