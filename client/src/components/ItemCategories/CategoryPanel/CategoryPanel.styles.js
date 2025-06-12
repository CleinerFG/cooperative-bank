import { font, sizes } from '@/styles/abstracts';
import { bgLinearGradient } from '@/styles/abstracts/gradients';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  ${sizes.border.sm}
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: ${sizes.rounded.md};
  display: flex;
  gap: ${sizes.spacing.sm};
  padding: ${sizes.spacing.sm};
`;

export const StyledButton = styled.button`
  ${({ $active }) => {
    const strength = $active ? 250 : 100;
    return bgLinearGradient(strength);
  }}
  padding: ${sizes.spacing.md};
  border-radius: ${sizes.rounded.sm};
  font-weight: 600;
  font-size: ${font.size.lg};
  color: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  justify-content: center;
  flex: 1;
`;
