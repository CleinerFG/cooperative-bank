import styled, { css } from 'styled-components';
import { gradients, sizes } from '@/styles/abstracts';
import { focusStyles, wrapperStyles } from '../../baseStyles';

export const StyledButton = styled.button.attrs({
  type: 'button',
})`
  ${wrapperStyles}
  flex: 1;
  justify-content: center;
  gap: ${sizes.spacing.md};
  padding: ${sizes.spacing.md};

  &:hover {
    ${focusStyles}
  }

  ${({ $selected, theme }) => {
    return $selected
      ? css`
          ${gradients.bgLinearGradient(100, 150)}
          border-color:${theme.colors.secondary[300]};
        `
      : css`
          background-color: ${theme.colors.neutral[0]};
        `;
  }}

  &:focus {
    outline: none;
    ${focusStyles}
  }

  svg {
    stroke: ${({ theme }) => theme.colors.gray[700]};
    stroke-width: ${({ $selected }) => ($selected ? 2.2 : 2)};
  }
`;

export const StyledLabel = styled.span`
  font-weight: ${({ $selected }) => ($selected ? 600 : 500)};
  color: ${({ theme }) => theme.colors.gray[700]};
`;
