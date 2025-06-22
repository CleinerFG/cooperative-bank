import styled, { css } from 'styled-components';
import { sizes } from '@/styles/abstracts';

const getVariantStyle = (variant = { color: 'gray', size: 'xs' }, theme) => {
  return {
    bg: theme.colors[variant.color][100],
    color: theme.colors[variant.color][700],
    iconSize: sizes.icon[variant.size],
  };
};

export const StyledToolButtonsContainer = styled.div`
  padding-right: ${sizes.spacing.md};
  display: flex;
  gap: ${sizes.spacing.xs};
`;

export const StyledButton = styled.button`
  padding: ${sizes.spacing.xs};
  border-radius: ${sizes.rounded.md};

  ${({ $variant, theme }) => {
    const { bg, color, iconSize } = getVariantStyle($variant, theme);

    return css`
      background-color: ${bg};
      color: ${color};

      svg {
        stroke: ${color};
        width: ${iconSize};
        height: ${iconSize};
      }
    `;
  }}
`;
