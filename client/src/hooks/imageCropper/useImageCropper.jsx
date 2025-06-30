import { useMemo, useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import { createCroppedImage, centerAspectCrop } from './utils';

import 'react-image-crop/dist/ReactCrop.css';

function useImageCropper({ imageSrc, aspect }) {
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const imgRef = useRef(null);

  const onImageLoad = (ev) => {
    if (aspect) {
      const { width, height } = ev.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  };

  const createImageUrlAndFile = async () => {
    if (!completedCrop?.width || !completedCrop?.height || !imgRef.current)
      return;

    const { url, file } = await createCroppedImage(
      imageSrc,
      completedCrop,
      imgRef.current
    );

    return { url, file };
  };

  const CropperComponent = useMemo(() => {
    return (
      <ReactCrop
        crop={crop}
        onChange={(_, percentCrop) => setCrop(percentCrop)}
        onComplete={(c) => setCompletedCrop(c)}
        aspect={aspect}
        minHeight={100}
        keepSelection
      >
        <img ref={imgRef} alt="Crop me" src={imageSrc} onLoad={onImageLoad} />
      </ReactCrop>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crop, aspect, imageSrc]);

  return {
    CropperComponent,
    cropIsComplete: Boolean(completedCrop),
    createImageUrlAndFile,
  };
}

export default useImageCropper;
