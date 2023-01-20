import { useEffect } from 'react';

declare global {
  interface Window {
    usePreloadImagesData?: Record<string, unknown[]>;
  }
}

export const usePreloadImages = (imageSrcs: string[]): void => {
  useEffect(() => {
    const randomStr = Math.random().toString(32).slice(2) + Date.now();
    window.usePreloadImagesData = window.usePreloadImagesData ?? {};
    window.usePreloadImagesData[randomStr] = [];
    for (const src of imageSrcs) {
      // preload the image
      const img = new Image();
      img.src = src;
      // keep a reference to the image
      window.usePreloadImagesData[randomStr].push(img); 
    }
    return () => {
      delete window.usePreloadImagesData?.[randomStr];
    };
  }, [ imageSrcs ]);
};