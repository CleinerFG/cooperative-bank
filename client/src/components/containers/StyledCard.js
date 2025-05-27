import { sizes, utils } from '@/styles/abstracts';
import styled from 'styled-components';

export default styled.div`
  display: flex;
  gap: ${sizes.spacing.lg};
  padding: ${sizes.spacing.lg};
  border-radius: ${sizes.rounded.lg};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border: solid ${utils.rem(1)};
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;
