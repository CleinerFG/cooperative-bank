import { gradients, sizes } from '@/styles/abstracts';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${sizes.spacing.sm};
`;

export const StyledIndicator = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  transition: all 0.3s;

  ${({ $pastStep, $currentStep, theme }) => {
    const bg = $pastStep
      ? theme.colors.secondary[600]
      : $currentStep
      ? theme.colors.secondary[400]
      : theme.colors.gray[300];
    return css`
      background-color: ${bg};
      ${$currentStep
        ? css`
            ${gradients.bgLinearGradient(300)}
            transform: scale(140%);
          `
        : null}
    `;
  }};
`;
