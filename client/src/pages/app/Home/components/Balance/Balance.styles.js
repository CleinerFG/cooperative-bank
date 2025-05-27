import styled from 'styled-components';
import { font, sizes, utils } from '@/styles/abstracts';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.xs};
  padding: ${sizes.spacing.lg};
  border-radius: 0 0 ${sizes.rounded['2xl']} ${sizes.rounded['2xl']};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border: solid ${utils.rem(1)};
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${font.size.sm};
  font-weight: bold;
`;

export const StyledValue = styled.div`
  display: flex;
  gap: ${sizes.spacing.xs};
  align-items: center;
  font-size: ${font.size['2xl']};
  font-weight: bold;
`;
