import styled from 'styled-components';
import { gradients, sizes } from '@/styles/abstracts';

export const StyledIconContainer = styled.div`
  ${gradients.bgLinearGradient(300)}
  border-radius: ${sizes.rounded.lg};
  padding: ${sizes.spacing.sm};

  svg {
    stroke: ${({ theme }) => theme.colors.gray[800]};
    width: 4rem;
    height: 4rem;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${sizes.spacing.md};
  margin-bottom: ${sizes.spacing.sm};
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[700]};
`;
