import styled, { css } from 'styled-components';
import { font, gradients, sizes, utils } from '@/styles/abstracts';

const DEFAULT_VARIANT = 'primary';

const variantStyles = {
  primary: (theme) => ({
    default: {
      textColor: theme.colors.gray[800],
      bg: gradients.bgLinearGradient(300, 90),
      borderColor: 'transparent',
    },
    hover: {
      bg: gradients.bgLinearGradient(250, 90),
      borderColor: 'transparent',
    },
  }),
  secondary: (theme) => ({
    default: {
      textColor: theme.colors.secondary[400],
      bg: css`
        background-color: ${theme.colors.neutral[0]};
      `,
      borderColor: theme.colors.secondary[300],
    },
    hover: {
      bg: css`
        background-color: ${theme.colors.neutral[50]};
      `,
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
  font-weight: 500;
  transition: all 0.3s ease;

  svg {
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
  }

  ${({ $variant = DEFAULT_VARIANT, disabled = false, theme }) => {
    const { default: def, hover } = getVariantStyle($variant, theme);

    return css`
      color: ${def.textColor};
      border-color: ${def.borderColor};
      ${def.bg};

      ${disabled &&
      css`
        cursor: not-allowed;
        opacity: 0.6;
        pointer-events: none;
      `}

      &:hover {
        ${hover.bg};
        border-color: ${hover.borderColor};
      }
    `;
  }}
`;
