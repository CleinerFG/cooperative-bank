import styled, { css } from 'styled-components';
import { font, sizes, utils } from '@/styles/abstracts';

const DEFAULT_VARIANT = 'primary';

const variantStyles = {
  primary: (theme) => ({
    textColor: theme.colors.gray[800],
    bgColor: theme.colors.secondary[300],
    hover: {
      bgColor: theme.colors.secondary[400],
      borderColor: theme.colors.secondary[400],
    },
  }),
  secondary: (theme) => ({
    textColor: theme.colors.secondary[400],
    bgColor: 'transparent',
    hover: {
      bgColor: 'transparent',
      borderColor: theme.colors.secondary[400],
    },
  }),
};

const getVariantStyle = (variant, theme) => variantStyles[variant](theme);

export const StyledButton = styled.button`
  padding: ${sizes.spacing.md} ${sizes.spacing.lg};
  border: solid ${utils.rem(2)};
  border-color: ${({ theme }) => theme.colors.secondary[300]};
  border-radius: ${sizes.rounded.lg};
  font-size: ${font.size.md};
  font-weight: 600;
  transition: all 0.3s ease;

  ${({ $variant = DEFAULT_VARIANT, theme }) => {
    const { textColor, bgColor, hover } = getVariantStyle($variant, theme);
    return css`
      color: ${textColor};
      padding: ${sizes.spacing.md} ${sizes.spacing.lg};
      background-color: ${bgColor};

      &:hover {
        background-color: ${hover.bgColor};
        border-color: ${hover.borderColor};
      }
    `;
  }}
`;
