import { useState } from 'react';
import Modal from '../Modal';
import {
  StyledCroppedImage,
  StyledImgContainer,
} from './CropImageModal.styles';
import {
  StyledHeader,
  StyledTitle,
  StyledIconContainer,
  StyledFooter,
} from '../baseStyles';
import { ImageUp } from 'lucide-react';
import Button from '@/components/formElements/Button';
import { useTranslation } from 'react-i18next';
import { useImageCropper } from '@/hooks/imageCropper';

function CropImageModal({ isOpen, onClose, imageSrc }) {
  const { t } = useTranslation();

  const { CropperComponent, cropIsComplete, createImageUrlAndFile } =
    useImageCropper({ imageSrc, aspect: 1 });

  const [croppedImage, setCroppedImage] = useState(null);
  const [showCroppedImage, setShowCroppedImage] = useState(false);

  const handleDisplayCroppedImage = async () => {
    if (!cropIsComplete) return;

    try {
      const { url, file } = await createImageUrlAndFile();
      console.log(file);
      setShowCroppedImage(true);
      setCroppedImage(url);
    } catch (e) {
      console.error(e);
    }
  };

  const resetCroppedImage = () => {
    setCroppedImage(null);
    setShowCroppedImage(false);
  };

  const handleModalClose = () => {
    onClose();
    resetCroppedImage();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <StyledHeader>
        <StyledIconContainer>
          <ImageUp />
        </StyledIconContainer>
        <StyledTitle>{t('adjustImage')}</StyledTitle>
      </StyledHeader>

      <StyledImgContainer>
        {!showCroppedImage ? (
          CropperComponent
        ) : (
          <StyledCroppedImage src={croppedImage} alt="Cropped result" />
        )}
      </StyledImgContainer>

      <StyledFooter>
        {!showCroppedImage ? (
          <>
            <Button variant="secondary" handleClick={handleModalClose}>
              {t('back')}
            </Button>
            <Button
              handleClick={handleDisplayCroppedImage}
              isDisabled={!cropIsComplete}
            >
              {t('seeResult')}
            </Button>
          </>
        ) : (
          <>
            <Button variant="secondary" handleClick={resetCroppedImage}>
              {t('edit')}
            </Button>
            <Button variant="primary">{t('save')}</Button>
          </>
        )}
      </StyledFooter>
    </Modal>
  );
}

export default CropImageModal;
