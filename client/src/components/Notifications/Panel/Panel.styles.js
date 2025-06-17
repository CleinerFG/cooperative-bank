import { StyledBackdropStyle } from '@/components/modals/Modal/Modal.styles';
import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledBackdrop = styled(StyledBackdropStyle)`
  top: 4rem;
  z-index: 998;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.lg};
  padding: ${sizes.spacing.md} ${sizes.spacing.lg};
  padding-bottom: ${sizes.spacing.xl};
  border-radius: 0 0 ${sizes.spacing.lg} ${sizes.spacing.lg};
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const StyledContent = styled.div`
  display: flex;
  gap: ${sizes.spacing.md};
  flex-direction: column;
`;
