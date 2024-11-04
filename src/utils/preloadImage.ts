const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

export const preloadBackgroundImage = async (src: string | string[]) => {
  try {
    if (typeof src === 'string') {
      await preloadImage(src);
    } else {
      await Promise.allSettled(
        src.map(async (imageSrc) => {
          await preloadImage(imageSrc);
        })
      );
    }
  } catch (error) {
    console.error("Error preloading image:", error);
  }
};