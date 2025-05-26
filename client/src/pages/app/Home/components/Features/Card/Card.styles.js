import { sizes, utils } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${sizes.spacing.lg};
  gap: ${sizes.spacing.lg};
  border: ${utils.rem(1)} solid;
  border-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${sizes.rounded.lg};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  cursor: pointer;
`;
