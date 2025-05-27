import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.lg};
  padding: ${sizes.spacing.lg};
  border-radius: ${sizes.rounded.lg};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border: solid 1px ${({ theme }) => theme.colors.gray[200]};
`;

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[800]};
`;
