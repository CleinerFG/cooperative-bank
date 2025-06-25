import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledFooter = styled.footer`
  display: flex;
  gap: ${sizes.spacing.xl};
  flex-direction: column;
`;

export const StyledButtons = styled.div`
  display: flex;
  gap: ${sizes.spacing.md};
  justify-content: space-between;

  button {
    width: 100%;
  }
`;
