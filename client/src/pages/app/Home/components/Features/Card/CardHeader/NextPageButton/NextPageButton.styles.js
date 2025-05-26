import { sizes, utils } from '@/styles/abstracts';
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
    width: ${sizes.icon.xl};
    height: ${sizes.icon.xl};
  }
`;

// Visual component
export const StyledCircleTranslucent = styled.div`
  position: absolute;
  z-index: 0;
  top: -2rem;
  right: -6rem;
  width: 10rem;
  height: 5.5rem;
  background: linear-gradient(
    60deg,
    ${({ theme }) => theme.colors.primary[100]},
    ${({ theme }) => theme.colors.secondary[200]}
  );
  border-bottom-left-radius: ${utils.rem(50)};

  transform: scale(1);
  transition: ease-in-out 0.3s;

  ${StyledButton}:hover & {
    transform: translateX(-4rem);
  }
`;
