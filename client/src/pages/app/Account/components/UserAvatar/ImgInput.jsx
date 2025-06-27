import {
  StyledCameraIcon,
  StyledInput,
  StyledInputContainer,
} from './UserAvatar.styles';

function Imginput({ onChange }) {
  return (
    <StyledInputContainer>
      <StyledInput type="file" accept="image/*" onChange={onChange} />
      <StyledCameraIcon />
    </StyledInputContainer>
  );
}

export default Imginput;
