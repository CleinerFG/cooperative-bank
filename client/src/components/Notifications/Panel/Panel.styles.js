import { StyledBackdropStyle } from '@/components/modals/Modal/Modal.styles';
import { font, sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledBackdrop = styled(StyledBackdropStyle)`
  z-index: 998;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledContainer = styled.div`
  max-width: 768px;
  margin: auto;
  margin-top: 4rem; // Header size
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.lg};
  padding: ${sizes.spacing.md} ${sizes.spacing.lg};
  padding-bottom: ${sizes.spacing['2xl']};
  border-radius: 0 0 ${sizes.spacing.lg} ${sizes.spacing.lg};
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const StyledContent = styled.div`
  display: flex;
  gap: ${sizes.spacing.md};
  flex-direction: column;
`;

export const StyledWithoutNotifications = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${sizes.spacing.lg};

  svg {
    width: 4rem;
    height: 4rem;
    stroke: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const StyledMessage = styled.span`
  font-weight: 600;
  font-size: ${font.size.lg};
  color: ${({ theme }) => theme.colors.gray[700]};
`;
