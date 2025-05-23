import styled, { css } from 'styled-components';
import { sizes } from '@/styles/abstracts';

const styles = {
  edit: 'gray',
  cancel: 'red',
  confirm: 'green',
};

const getVariantStyle = (variant, theme) => {
  const baseColor = styles[variant];
  return {
    bg: theme.colors[baseColor][100],
    color: theme.colors[baseColor][600],
    size: variant === 'edit' ? sizes.icon.sm : sizes.icon.xs,
  };
};

export const StyledContainer = styled.div`
  padding-right: ${sizes.spacing.md};
`;

export const StyledBtnGroup = styled.div`
  display: flex;
  gap: ${sizes.spacing.xs};
`;

export const StyledButton = styled.button`
  padding: ${sizes.spacing.xs};
  border-radius: ${sizes.rounded.md};

  ${({ $variant, theme }) => {
    const { bg, color, size } = getVariantStyle($variant, theme);
    return css`
      background-color: ${bg};
      color: ${color};

      svg {
        stroke: ${color};
        width: ${size};
        height: ${size};
      }
    `;
  }}
`;
