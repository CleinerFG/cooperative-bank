import { sizes, utils } from '@/styles/abstracts';
import styled from 'styled-components';

export const CARD_SPACING = sizes.spacing.lg;

export default styled.div`
  display: flex;
  gap: ${CARD_SPACING};
  padding: ${CARD_SPACING};
  border-radius: ${sizes.rounded.lg};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border: solid ${utils.rem(1)};
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;
