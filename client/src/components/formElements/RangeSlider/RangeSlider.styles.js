import { gradients, sizes } from '@/styles/abstracts';
import styled from 'styled-components';
import { StyledLabel } from '../baseFieldStyles';

export const StyledContainer = styled.div`
  padding-bottom: ${sizes.spacing.sm};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledValue = styled(StyledLabel)`
  font-weight: 700;
`;

export const StyledRange = styled.input`
  width: 100%;
  height: 0.75rem;
  appearance: none;
  ${gradients.bgLinearGradient(300)}
  border-radius: ${sizes.rounded.sm};
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    background: ${({ theme }) => theme.colors.neutral[0]};
    ${sizes.border.md}
    border-radius: 50%;
    cursor: pointer;
  }
`;
