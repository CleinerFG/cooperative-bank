import styled from 'styled-components';
import {
  baseElementStyles,
  focusStyles,
  wrapperStyles,
} from '../baseFieldStyles';

export const StyledSelect = styled.select`
  ${baseElementStyles}
  ${wrapperStyles}
  
  &:focus {
    ${focusStyles}
  }
`;
