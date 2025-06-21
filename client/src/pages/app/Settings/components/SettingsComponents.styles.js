import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledFormButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${sizes.spacing.md};
`;