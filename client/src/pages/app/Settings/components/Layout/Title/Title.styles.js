import { font, sizes, utils } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledTitleContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.md};
  padding: ${sizes.spacing.md};
  align-items: center;
  border-bottom: solid ${utils.rem(2)};
  border-bottom-color: ${({ theme }) => theme.colors.neutral[50]};

  svg {
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
    stroke-width: 2.5;
  }
`;

export const StyledTitle = styled.h1`
  font-size: ${font.size.xl};
  color: ${({ theme, $strong }) => {
    const variant = $strong ? 500 : 100;
    return theme.colors.neutral[variant];
  }};
  font-weight: ${({ $strong }) => ($strong ? 'bold' : 500)};
`;
