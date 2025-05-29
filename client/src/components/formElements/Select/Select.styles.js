import styled from 'styled-components';
import { baseElementStyles, focusStyles, wrapperStyles } from '../baseStyles';

export const StyledSelect = styled.select`
  ${baseElementStyles}
  ${wrapperStyles}
  
  &:focus {
    ${focusStyles}
  }
`;
