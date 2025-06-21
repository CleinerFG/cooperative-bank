import { gradients, sizes } from '@/styles/abstracts';
import styled, { css } from 'styled-components';
import { StyledLabel } from '../baseFieldStyles';

export const StyledContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.md};
  align-items: center;
`;

export const StyledTextLabel = styled(StyledLabel)`
  cursor: pointer;
  word-wrap: break-word;
`;

export const StyledSliderContainer = styled.label`
  cursor: pointer;
  position: relative;
  border-radius: 3rem;
  width: 3rem;
  height: 1.5rem;

  ${({ $checked, theme }) =>
    $checked
      ? gradients.bgLinearGradient(300)
      : css`
          background-color: ${theme.colors.gray[300]};
        `}
`;

export const StyledCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledSlider = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 1.25rem;
  width: 1.25rem;
  left: ${({ $checked }) =>
    $checked ? 'calc(100% - 1.25rem - 0.125rem)' : '0.125rem'};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  transition: left 0.3s ease;
  border-radius: 50%;
`;
