import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export default styled.div`
  display: flex;
  gap: ${sizes.spacing.lg};
  padding: ${sizes.spacing.md};
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
