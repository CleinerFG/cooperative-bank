import GradientBorderCircle from '@/components/GradientBorderCircle';
import StyledCircleImg from '@/components/ui/StyledCircleImg';
import {
  StyledButton,
  StyledCameraIcon,
  StyledContainer,
} from './UserAvatar.styles';

function UserAvatar() {
  return (
    <StyledContainer>
      <GradientBorderCircle sizePx={160}>
        <StyledCircleImg src="/profile.jpg" alt="User image" />
        <StyledButton>
          <StyledCameraIcon />
        </StyledButton>
      </GradientBorderCircle>
    </StyledContainer>
  );
}

export default UserAvatar;
