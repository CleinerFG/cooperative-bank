import Cropper from 'react-easy-crop';
import Modal from '../Modal';
import { useState } from 'react';
import {
  StyledContainer,
  StyledCropContainer,
  StyledCroppedImage,
  StyledTitle,
} from './CropImageModal.styles';
import { createCroppedImage } from './utils';

function CropImageModal({ isOpen, onClose, imageSrc }) {
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
      <StyledContainer>
        <StyledTitle>Ajuste a Imagem de acordo com sua preferência</StyledTitle>

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
            <StyledCroppedImage src={croppedImage} alt="Imagem cortada" />
          ) : null}
        </StyledCropContainer>

        <button onClick={showCroppedImage} disabled={!croppedAreaPixels}>
          Ver Resultado
        </button>
        <button onClick={resetCroppedImage}>Editar Novamente</button>
      </StyledContainer>
    </Modal>
  );
}

export default CropImageModal;
