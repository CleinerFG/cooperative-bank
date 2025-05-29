import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledBackdropStyle = styled.div`
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
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  padding: ${sizes.spacing['2xl']};
  border-radius: ${sizes.rounded.lg};
  margin: 1rem;
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${sizes.spacing.sm};

  svg {
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
    stroke: ${({ theme }) => theme.colors.red[600]};
  }
`;
