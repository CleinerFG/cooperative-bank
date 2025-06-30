import Cropper from 'react-easy-crop';
import Modal from '../Modal';
import { useState } from 'react';
import {
  StyledCropContainer,
  StyledCroppedImage,
} from './CropImageModal.styles';
import { createCroppedImage } from './utils';
import {
  StyledHeader,
  StyledTitle,
  StyledIconContainer,
  StyledFooter,
  StyledContent,
} from '../baseStyles';
import { ImageUp } from 'lucide-react';
import Button from '@/components/formElements/Button';
import { useTranslation } from 'react-i18next';

function CropImageModal({ isOpen, onClose, imageSrc }) {
  const { t } = useTranslation();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = (_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  };

  const showCroppedImage = async () => {
    try {
      const { url } = await createCroppedImage(imageSrc, croppedAreaPixels);
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
      <StyledContent>
        <StyledCropContainer>
          {!croppedImage ? (
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          ) : croppedImage ? (
            <StyledCroppedImage src={croppedImage} alt="Image cropped" />
          ) : null}
        </StyledCropContainer>
      </StyledContent>

      <StyledFooter>
        <Button variant="secondary" handleClick={resetCroppedImage}>
          {t('edit')}
        </Button>
        <Button handleClick={showCroppedImage} disabled={!croppedAreaPixels}>
          {t('seeResult')}
        </Button>
      </StyledFooter>
    </Modal>
  );
}

export default CropImageModal;
