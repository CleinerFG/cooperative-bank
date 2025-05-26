import styled from 'styled-components';
import { sizes, utils } from '@/styles/abstracts';

export default styled.section`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.lg};
  padding: ${sizes.spacing.lg};
  border-radius: ${sizes.rounded.xl};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border: solid ${utils.rem(1)};
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;
