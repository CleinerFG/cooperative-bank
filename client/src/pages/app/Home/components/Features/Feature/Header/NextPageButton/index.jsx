import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { StyledCircleTranslucent, StyledButton } from './NextPageButton.styles';

function NextPageButton({ navigateTo }) {
  const navigate = useNavigate();
  return (
    <StyledButton
      onClick={(ev) => {
        ev.stopPropagation();
        navigate(navigateTo);
      }}
    >
      <StyledCircleTranslucent />
      <ChevronRight />
    </StyledButton>
  );
}

export default NextPageButton;
