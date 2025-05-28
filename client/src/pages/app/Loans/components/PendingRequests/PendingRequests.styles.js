import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${sizes.spacing.md};
`;
