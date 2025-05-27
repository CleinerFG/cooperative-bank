import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-weight: ${({ $strong }) => ($strong ? 700 : 600)};
`;
