import {
  StyledCameraIcon,
  StyledInput,
  StyledInputContainer,
} from './UserAvatar.styles';

function ImgInput({ onFileInput }) {
  return (
    <StyledInputContainer>
      <StyledInput
        type="file"
        accept="image/*"
        onClick={(ev) => (ev.target.value = '')}
        onInput={onFileInput}
      />
      <StyledCameraIcon />
    </StyledInputContainer>
  );
}

export default ImgInput;
