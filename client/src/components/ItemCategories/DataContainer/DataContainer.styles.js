import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.sm};
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
  padding: ${sizes.spacing.md};
`;

export const StyledSubTitle = styled.h2`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[800]};
  text-align: center;
  padding-bottom: ${sizes.spacing.sm};
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.colors.secondary[200]};
`;
