import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.xl};
  padding: ${sizes.spacing.md} ${sizes.spacing.xl};
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.sm};
  align-items: center;
  border-bottom-color: ${({ theme }) => theme.colors.gray[50]};

  svg {
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
    stroke-width: 3;
  }
`;

export const StyledMain = styled.main`
  padding: ${({ $pd }) => ($pd ? sizes.spacing.xl : 0)};
`;
