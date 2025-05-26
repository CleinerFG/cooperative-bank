import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const StyledIconContainer = styled.div`
  padding: ${sizes.spacing.md};
  border-radius: ${sizes.rounded.lg};
  background-color: ${({ theme }) => theme.colors.primary[200]};

  svg {
    stroke: ${({ theme }) => theme.colors.gray[800]};
    width: ${sizes.icon.lg};
    height: ${sizes.icon.lg};
  }
`;

export const StyledTitleContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: ${sizes.spacing.md};
  align-items: center;
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[800]};
`;

