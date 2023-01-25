import { useEffect, useState } from "react";

const preloadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = img.onabort = () => reject();
    img.src = src;
  });

const useImagePreloader = (imageList) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const preloadImages = async () => {
      const imagesPromiseList = imageList.map((img) => preloadImage(img));

      try {
        await Promise.all(imagesPromiseList);
      } catch (error) {
        console.error(error);
      }

      if (isCancelled) {
        return;
      }

      setImagesPreloaded(true);
    };

    preloadImages();

    return () => {
      isCancelled = true;
    };
  }, [imageList]);

  return { imagesPreloaded };
};

export default useImagePreloader;
