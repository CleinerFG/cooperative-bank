import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.sm};
  align-items: center;

  svg {
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
    stroke-width: 3;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: ${({ $strong }) => ($strong ? 800 : 700)};
`;
