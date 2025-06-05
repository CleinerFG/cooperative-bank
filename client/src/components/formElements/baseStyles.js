import styled, { css } from 'styled-components';
import { font, sizes, utils } from '@/styles/abstracts';

const ringShadowInvalid = ({ theme }) =>
  `0 0 0 ${utils.rem(3)} ${theme.colors.red[100]}`;

export const wrapperStyles = css`
  ${sizes.border.md}
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: ${sizes.rounded.md};
  transition: 0.2s ease-in-out all;

  ${({ $invalidStyle, theme }) =>
    $invalidStyle &&
    css`
      box-shadow: ${ringShadowInvalid};
      border-color: ${theme.colors.red[400]};
    `}
`;

export const baseElementStyles = css`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray[800]};
  font-size: ${font.size.md};
  padding: ${sizes.spacing.lg} ${sizes.spacing.md};
  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`;

const ringShadowFocus = ({ theme }) =>
  `0 0 0 ${utils.rem(3)} ${theme.colors.secondary[100]}`;

export const focusStyles = css`
  border-color: ${({ theme }) => theme.colors.secondary[250]};
  box-shadow: ${ringShadowFocus};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${sizes.spacing.sm};
`;

export const StyledInput = styled.input`
  ${baseElementStyles}
`;

export const StyledWrapper = styled.div`
  ${wrapperStyles}

  &:focus-within {
    ${focusStyles}
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${font.size.md};
  font-weight: 500;
`;
