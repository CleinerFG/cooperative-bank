import styled from 'styled-components';
import { sizes, font } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.xs};
`;

export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${font.size.sm};
  font-weight: bold;
`;

export const StyledValueContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.sm};
`;

export const StyledBalanceValue = styled.div`
  display: flex;
  gap: ${sizes.spacing.xs};
  align-items: center;
  font-size: ${font.size['2xl']};
  font-weight: bold;
`;
