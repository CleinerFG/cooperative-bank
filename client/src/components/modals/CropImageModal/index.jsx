import 'react-image-crop/dist/ReactCrop.css';

import { useRef, useState } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import Modal from '../Modal';
import {
  StyledCroppedImage,
  StyledImgContainer,
} from './CropImageModal.styles';
import { createCroppedImage } from './utils';
import {
  StyledHeader,
  StyledTitle,
  StyledIconContainer,
  StyledFooter,
} from '../baseStyles';
import { ImageUp } from 'lucide-react';
import Button from '@/components/formElements/Button';
import { useTranslation } from 'react-i18next';

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
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

function CropImageModal({ isOpen, onClose, imageSrc }) {
  const { t } = useTranslation();

  const ASPECT = 1;

  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const imgRef = useRef(null);

  function onImageLoad(ev) {
    if (ASPECT) {
      const { width, height } = ev.currentTarget;
      console.table({ width, height });

      setCrop(centerAspectCrop(width, height, ASPECT));
    }
  }

  const showCroppedImage = async () => {
    if (!completedCrop?.width || !completedCrop?.height) return;

    try {
      const { url } = await createCroppedImage(
        imageSrc,
        completedCrop,
        imgRef.current
      );
      setCroppedImage(url);
    } catch (e) {
      console.error(e);
    }
  };

  const resetCroppedImage = () => setCroppedImage(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledHeader>
        <StyledIconContainer>
          <ImageUp />
        </StyledIconContainer>
        <StyledTitle>{t('adjustImage')}</StyledTitle>
      </StyledHeader>

      <StyledImgContainer>
        {!croppedImage ? (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => {
              console.log(percentCrop);
              setCrop(percentCrop);
            }}
            onComplete={(c) => {
              console.log(c);
              setCompletedCrop(c);
            }}
            aspect={ASPECT}
            minHeight={100}
            keepSelection
          >
            <img
              ref={imgRef}
              alt="Crop me"
              src={imageSrc}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        ) : (
          <StyledCroppedImage src={croppedImage} alt="Cropped result" />
        )}
      </StyledImgContainer>

      <StyledFooter>
        <Button variant="secondary" handleClick={resetCroppedImage}>
          {t('edit')}
        </Button>
        <Button handleClick={showCroppedImage} disabled={!completedCrop}>
          {t('seeResult')}
        </Button>
      </StyledFooter>
    </Modal>
  );
}

export default CropImageModal;
