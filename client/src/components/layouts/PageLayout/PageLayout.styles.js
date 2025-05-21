import { sizes, utils } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledTitleContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.sm};
  padding: ${sizes.spacing.md};
  align-items: center;
  border-bottom: solid ${utils.rem(2)};
  border-bottom-color: ${({ theme }) => theme.colors.neutral[50]};

  svg {
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
    stroke-width: 3;
  }
`;

export const StyledMain = styled.main`
  padding: ${sizes.spacing.xl};
`;
