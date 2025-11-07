import React, { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { TransformPage } from './pages/TransformPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ProfilePage } from './pages/ProfilePage';
import { GalleryPage } from './pages/GalleryPage';
import { StartPage } from './pages/StartPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <StartPage onNavigate={handleNavigate} />;
      case 'camera':
        return <TransformPage />;
      case 'favorites':
        return <FavoritesPage />;
      case 'profile':
        return <ProfilePage />;
      case 'gallery':
        return <GalleryPage />;
      default:
        return <StartPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      <main className="w-full flex-grow flex items-start justify-center">
        {renderContent()}
      </main>
      <BottomNav currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
