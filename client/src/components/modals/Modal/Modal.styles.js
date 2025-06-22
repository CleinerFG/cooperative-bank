import { sizes } from '@/styles/abstracts';
import { appMaxWidth } from '@/styles/abstracts/variables';
import styled from 'styled-components';

export const StyledBackdropStyle = styled.div`
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledContainer = styled.div`
  overflow: hidden;
  max-width: ${appMaxWidth};
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: ${sizes.rounded.lg};
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${sizes.spacing.sm};
  padding: ${sizes.spacing.xs};

  svg {
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
    stroke: ${({ theme }) => theme.colors.red[600]};
  }
`;
