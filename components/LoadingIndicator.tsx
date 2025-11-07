
import React, { useState, useEffect } from 'react';

const loadingMessages = [
  "Applying foundation...",
  "Teasing the wig...",
  "Gluing down the brows...",
  "Finding the spotlight...",
  "The library is now open...",
  "Sissy that walk...",
  "Blending for the gods...",
];

export const LoadingIndicator: React.FC = () => {
  const [message, setMessage] = useState(loadingMessages[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessage(prevMessage => {
        const currentIndex = loadingMessages.indexOf(prevMessage);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-pink-400"></div>
      <h2 className="text-3xl text-cyan-300 mt-6 tracking-widest">The Transformation is Happening!</h2>
      <p className="text-white text-xl mt-2">{message}</p>
    </div>
  );
};
