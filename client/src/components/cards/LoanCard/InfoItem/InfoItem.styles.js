import styled from 'styled-components';
import { font, gradients, sizes } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  ${gradients.bgLinearGradient(100)}
  background-color: ${({ theme }) => theme.colors.gray[50]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${sizes.spacing.md};
  border-radius: ${sizes.rounded.md};
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.sm};
  align-items: center;

  svg {
    width: ${sizes.icon.xs};
    height: ${sizes.icon.xs};
    stroke: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const StyledLabel = styled.span`
  font-size: ${font.size.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const StyledValue = styled(StyledLabel)`
  font-size: ${font.size.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[700]};
`;
