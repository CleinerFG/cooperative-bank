import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
`;

export const StyledButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${sizes.spacing.lg};
`;
