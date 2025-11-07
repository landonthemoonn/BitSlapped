import React, { useState, useCallback, useMemo, useRef } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { DragStyleCard } from '../components/DragStyleCard';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { Logo } from '../components/Logo';
import { transformImage } from '../services/geminiService';
import { DRAG_STYLES } from '../constants';
import { DragStyle, AppState } from '../types';

export const HomePage: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('start');
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<DragStyle | null>(null);
  const [transformedImage, setTransformedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const originalImagePreview = useMemo(() => {
    if (!originalImage) return null;
    return URL.createObjectURL(originalImage);
  }, [originalImage]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setOriginalImage(e.target.files[0]);
      setError(null);
      setAppState('select_style');
    }
  };

  const handleTransform = useCallback(async () => {
    if (!originalImage || !selectedStyle) return;
    setAppState('processing');
    setError(null);
    try {
      const result = await transformImage(originalImage, selectedStyle.prompt);
      setTransformedImage(result);
      setAppState('result');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      setAppState('select_style'); // Go back to selection on error
    }
  }, [originalImage, selectedStyle]);

  const handleReset = () => {
    setAppState('start');
    setOriginalImage(null);
    setSelectedStyle(null);
    setTransformedImage(null);
    setError(null);
  };
  
  const handleDownload = () => {
    if (!transformedImage) return;
    const link = document.createElement('a');
    link.href = transformedImage;
    link.download = `bitslapped_transformation_${selectedStyle?.name.toLowerCase().replace(/ /g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    switch (appState) {
      case 'start':
        return (
          <div className="text-center flex flex-col justify-center items-center h-full">
            <Logo />
            <div className="mt-8 space-y-4 w-full max-w-xs">
                <Button variant="tertiary" onClick={() => setAppState('upload')}>QUEEN CAM</Button>
                <Button variant="tertiary" disabled>ILLUSIONS GALLERY</Button>
            </div>
          </div>
        );
      
      case 'upload':
        return (
            <div className="flex flex-col items-center">
                <input
                    type="file"
                    id="selfie-upload"
                    ref={fileInputRef}
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                    className="hidden"
                />
                <input
                    type="file"
                    id="camera-upload"
                    ref={cameraInputRef}
                    accept="image/*"
                    capture="user"
                    onChange={handleImageChange}
                    className="hidden"
                />
                <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-64 h-64 flex flex-col justify-center items-center bg-gray-200 bg-opacity-10 rounded-2xl border-4 border-dashed border-gray-500 cursor-pointer hover:border-pink-400 hover:bg-opacity-20 transition-colors duration-300"
                >
                    <svg className="w-16 h-16 text-gray-400 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-2xl text-red-500">UPLOAD</p>
                </div>

                <div className="mt-6 space-y-4 w-full max-w-xs">
                    <Button variant="tertiary" onClick={() => cameraInputRef.current?.click()}>CAMERA</Button>
                </div>
            </div>
        );

      case 'select_style':
        return (
          <div className="w-full">
             <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              {originalImagePreview && (
                <div className="text-center">
                  <h3 className="text-2xl text-cyan-300 mb-2">Your Selfie:</h3>
                  <img src={originalImagePreview} alt="Selfie preview" className="rounded-lg w-48 h-48 object-cover border-4 border-pink-500 box-glow" />
                </div>
              )}
              <div className="text-center md:text-left">
                <h2 className="text-3xl text-cyan-300 tracking-widest">Choose Your Drag Persona</h2>
                <p className="text-white text-xl">Select a style below to begin the magic.</p>
              </div>
            </div>
            {error && <p className="text-red-400 text-center text-xl mb-4 bg-black p-2 rounded">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {DRAG_STYLES.map(style => (
                <DragStyleCard
                  key={style.id}
                  styleInfo={style}
                  onSelect={setSelectedStyle}
                  isSelected={selectedStyle?.id === style.id}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Button onClick={handleTransform} disabled={!selectedStyle}>
                TRANSFORM!
              </Button>
            </div>
          </div>
        );
      
      case 'processing':
        return <LoadingIndicator />;

      case 'result':
        return (
          <div className="text-center">
            <h2 className="text-5xl text-cyan-300 mb-6 tracking-widest text-glow">The Big Reveal!</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl text-white mb-2">Before</h3>
                <img src={originalImagePreview || ''} alt="Original selfie" className="rounded-lg w-full max-w-md border-4 border-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl text-pink-400 mb-2 text-glow">After</h3>
                <img src={transformedImage || ''} alt="Transformed" className="rounded-lg w-full max-w-md border-4 border-pink-500 box-glow" />
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={handleDownload} variant="primary">Download Slayage</Button>
              <Button onClick={handleReset} variant="secondary">Start Over</Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-screen p-4 sm:p-8 flex flex-col items-center pb-28">
      {appState !== 'start' && <Header />}
      <div className="w-full max-w-7xl mt-8 flex-grow flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};
