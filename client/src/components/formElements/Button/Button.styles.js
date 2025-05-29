import styled, { css } from 'styled-components';
import { font, gradients, sizes, utils } from '@/styles/abstracts';

const DEFAULT_VARIANT = 'primary';

const variantStyles = {
  primary: (theme) => ({
    textColor: theme.colors.gray[800],
    bg: gradients.bgLinearGradient(300, 90),
    borderColor: 'transparent',
    hover: {
      bg: gradients.bgLinearGradient(250, 90),
      borderColor: 'transparent',
    },
  }),
  secondary: (theme) => ({
    textColor: theme.colors.secondary[400],
    bgColor: 'transparent',
    borderColor: theme.colors.secondary[300],
    hover: {
      bgColor: 'transparent',
      borderColor: theme.colors.secondary[400],
    },
  }),
};

const getVariantStyle = (variant, theme) => variantStyles[variant](theme);

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${sizes.spacing.sm};
  padding: ${sizes.spacing.md} ${sizes.spacing.lg};
  border: solid ${utils.rem(2)};
  border-radius: ${sizes.rounded.lg};
  font-size: ${font.size.md};
  font-weight: 600;
  transition: all 0.3s ease;

  svg {
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
  }

  ${({ $variant = DEFAULT_VARIANT, theme }) => {
    const { textColor, bg, borderColor, hover } = getVariantStyle(
      $variant,
      theme
    );
    return css`
      color: ${textColor};
      border-color: ${borderColor};
      padding: ${sizes.spacing.md} ${sizes.spacing.lg};
      ${bg};

      &:hover {
        ${hover.bg};
        border-color: ${hover.borderColor};
      }
    `;
  }}
`;
