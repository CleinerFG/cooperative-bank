import GradientBorderCircle from '@/components/GradientBorderCircle';
import StyledCircleImg from '@/components/ui/StyledCircleImg';
import { StyledCameraIcon, StyledContainer } from './UserAvatar.styles';

function UserAvatar() {
  return (
    <StyledContainer>
      <GradientBorderCircle sizePx={160}>
        <StyledCircleImg src="/profile.jpg" alt="User image" />
        <button>
          <StyledCameraIcon />
        </button>
      </GradientBorderCircle>
    </StyledContainer>
  );
}

export default UserAvatar;
