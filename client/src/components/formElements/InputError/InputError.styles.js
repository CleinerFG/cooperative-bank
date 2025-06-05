import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.sm};
  margin-top: -${sizes.spacing.xs};
`;

export const StyledItem = styled.span`
  color: ${({ theme }) => theme.colors.red[600]};
`;
