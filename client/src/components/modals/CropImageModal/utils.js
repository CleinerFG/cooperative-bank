export async function createCroppedImage(imageSrc, crop) {
  const blobImage = await new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');

      // Draw
      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Fail to create image blob'));
          }
        },
        'image/jpeg',
        1
      );
    };

    image.onerror = (err) => reject(err);
    image.src = imageSrc;
  });

  const file = new File([blobImage], 'imagem.jpg', { type: 'image/jpeg' });
  const url = URL.createObjectURL(file);

  return { file, url };
}
