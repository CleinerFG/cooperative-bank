import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${sizes.spacing.xl} ${sizes.spacing.lg};
  border: solid 1px ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${sizes.rounded.xl};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[10]};
  }
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${sizes.spacing.sm};
  font-weight: 500;

  svg {
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
  }
`;
''