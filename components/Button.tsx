import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const primaryClasses = 'bg-pink-500 text-white hover:bg-pink-600 box-glow font-bold text-2xl tracking-wider py-4';
  const secondaryClasses = 'bg-gray-700 text-cyan-300 hover:bg-gray-600 font-bold text-2xl tracking-wider py-4';
  const tertiaryClasses = 'font-bold bg-gray-200 text-red-500 hover:bg-white text-2xl tracking-wider py-3 shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)] active:shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)] active:translate-y-0.5 w-full';

  const getVariantClass = () => {
    switch (variant) {
      case 'primary': return primaryClasses;
      case 'secondary': return secondaryClasses;
      case 'tertiary': return tertiaryClasses;
      default: return primaryClasses;
    }
  }

  return (
    <button
      className={`px-8 rounded-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none disabled:translate-y-0 disabled:bg-gray-400 ${getVariantClass()}`}
      {...props}
    >
      {children}
    </button>
  );
};
