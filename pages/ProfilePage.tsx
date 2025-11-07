import React from 'react';
import { Header } from '../components/Header';

export const ProfilePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen p-4 sm:p-8 flex flex-col items-center pb-28">
      <Header />
      <div className="w-full max-w-7xl mt-8 flex-grow flex flex-col items-center justify-center text-center">
        <div className="text-6xl mb-4">👤</div>
        <h2 className="text-4xl text-cyan-300 tracking-widest text-glow">Your Profile</h2>
        <p className="text-white text-xl mt-4 max-w-md">
          The mirror is getting polished! This section is coming soon, where you'll be able to manage your queenly profile.
        </p>
      </div>
    </div>
  );
};
