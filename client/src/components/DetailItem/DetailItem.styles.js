import styled from 'styled-components';
import { sizes, gradients } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  display: flex;
  gap: ${sizes.spacing.md};
  padding: ${sizes.spacing.md};
  border-radius: ${sizes.rounded.md};
  ${sizes.border.sm}
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  ${gradients.bgLinearGradient(100, 30)}
  border-radius: ${sizes.spacing.sm};
  padding: ${sizes.spacing.sm};

  svg {
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.sm};
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const StyledValue = styled.span`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 700;
`;
