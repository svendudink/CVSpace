import { useEffect, useState } from "react";

const preloadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = img.onabort = () => reject();
    img.src = src;
  });

const useImagePreloader = (imageList) => {
  const [percentage, setPercentage] = useState(0);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const preloadImages = async () => {
      const imagesPromiseList = imageList.map((img) => preloadImage(img));
      let count = 0;

      imagesPromiseList.forEach((promise) => {
        promise
          .then(() => {
            count++;
            setPercentage(
              ((count / imagesPromiseList.length) * 100).toFixed(2)
            );
          })
          .catch(() => {
            // handle the error
          });
      });

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

  return { imagesPreloaded, percentage };
};

export { useImagePreloader };
