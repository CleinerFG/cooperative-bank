import { gradients, sizes, utils } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    z-index: 2;
    stroke: ${({theme})=> theme.colors.gray[900]};
    width: ${sizes.icon.lg};
    height: ${sizes.icon.lg};
  }
`;

// Visual component
export const StyledCircleTranslucent = styled.div`
  position: absolute;
  z-index: 0;
  top: -2rem;
  right: -4rem;
  width: 8rem;
  height: 5.5rem;
  ${gradients.bgLinearGradient(200, 60)};
  border-bottom-left-radius: ${utils.rem(50)};

  transform: scale(1);
  transition: ease-in-out 0.3s;

  ${StyledButton}:hover & {
    transform: translateX(-2rem);
  }
`;
