import styled from 'styled-components';
import { mixins } from '@/styles/abstracts';

export const StyledRow = styled.div`
  ${mixins.row}

  &:hover {
    ${mixins.rowHover}
  }
`;
