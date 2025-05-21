import styled from 'styled-components';
import { sizes, utils } from '@/styles/abstracts';

export default styled.div`
  display: flex;
  gap: ${sizes.spacing.lg};
  padding: ${sizes.spacing.lg};
  align-items: center;
  border-bottom: solid ${utils.rem(1)} hsla(0, 0%, 0%, 0.1);
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.neutral[20]};
    transition: all 0.5s;
  }
`;
