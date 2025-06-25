import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.sm};
`;

export const StyledLabelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLabel = styled.span`
  color: ${({ $highlight, theme }) =>
    $highlight ? theme.colors.secondary[400] : theme.colors.gray[700]};
  font-weight: 600;
`;
