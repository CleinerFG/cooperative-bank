import styled from 'styled-components';

import { rem } from '@/styles/abstracts/utils';
import { flexCenter } from '@/styles/abstracts/mixins';
import { spacing } from '@/styles/abstracts/sizes';

export const StyledHeader = styled.header`
  display: flex;
  gap: ${spacing.md};
  padding: ${spacing.md} ${spacing.lg} ${spacing.md} ${spacing.lg};
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary[300]};
`;

export const StyledProfileLink = styled.a`
  ${flexCenter}
`;

export const StyledAvatar = styled.div`
  ${flexCenter}
  width: ${rem(40)};
  height: ${rem(40)};
  background-color: var(--color-primary-200);
  /* box-shadow: map.get($shadows, sm); */
  border-radius: 50%;
  /* font-size: map.get($font-sizes, xl); */
  font-weight: 700;
`;
