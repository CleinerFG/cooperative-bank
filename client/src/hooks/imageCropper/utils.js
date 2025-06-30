import { centerCrop, makeAspectCrop } from 'react-image-crop';

export async function createCroppedImage(imageSrc, crop, imageElement) {
  const blobImage = await new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.crossOrigin = 'anonymous';

    image.onload = () => {
      const scaleX = image.naturalWidth / imageElement.width;
      const scaleY = image.naturalHeight / imageElement.height;

      const canvas = document.createElement('canvas');
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
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
  });

  const file = new File([blobImage], 'imagem.jpg', { type: 'image/jpeg' });
  const url = URL.createObjectURL(file);

  return { file, url };
}

export function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 60,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}
