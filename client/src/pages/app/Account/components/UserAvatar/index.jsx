import GradientBorderCircle from '@/components/GradientBorderCircle';
import StyledCircleImg from '@/components/ui/StyledCircleImg';
import { StyledContainer } from './UserAvatar.styles';
import ImgInput from './ImgInput';
import { useState } from 'react';
import CropImageModal from '@/components/modals/CropImageModal';

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

function UserAvatar() {
  const [cropIsOpen, setCropIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState();


  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setCropIsOpen(true);
    }
  };

  const onCloseCrop = () => setCropIsOpen(false);

  return (
    <>
      <StyledContainer>
        <GradientBorderCircle sizePx={160}>
          <CropImageModal
            isOpen={cropIsOpen}
            onClose={onCloseCrop}
            imageSrc={imageSrc}
          />
          <StyledCircleImg src="/profile.jpg" alt="User image" />
          <ImgInput onChange={onFileChange} />
        </GradientBorderCircle>
      </StyledContainer>
    </>
  );
}

export default UserAvatar;
