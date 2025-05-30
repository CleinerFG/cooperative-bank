import { StyledContainer, StyledItem } from "./InputErrors.styles";

function InputErros({ errors }) {
  return (
    errors.length > 0 && (
      <StyledContainer>
        {errors.map((error, i) => (
          <StyledItem key={i}>
            {error}
          </StyledItem>
        ))}
      </StyledContainer>
    )
  );
}

export default InputErros;