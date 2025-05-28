import styled from 'styled-components';
import { gradients, sizes } from '@/styles/abstracts';

export const StyledHeader = styled.header`
  height: 4rem;
  display: flex;
  gap: ${sizes.spacing.md};
  padding-top: ${sizes.spacing.md};
  padding-right: ${sizes.spacing.lg};
  padding-bottom: ${sizes.spacing.md};
  padding-left: ${sizes.spacing.lg};
  justify-content: end;
  ${gradients.bgLinearGradient()}

  svg {
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
  }
`;

export const StyledProfileLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
