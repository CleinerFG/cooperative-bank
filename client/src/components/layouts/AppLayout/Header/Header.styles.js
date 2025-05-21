import styled from 'styled-components';
import { font, sizes, utils } from '@/styles/abstracts';

export const StyledHeader = styled.header`
  display: flex;
  gap: ${sizes.spacing.md};
  padding-top: ${sizes.spacing.md};
  padding-right: ${sizes.spacing.lg};
  padding-bottom: ${sizes.spacing.md};
  padding-left: ${sizes.spacing.lg};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary[300]};
`;

export const StyledProfileLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${utils.rem(40)};
  height: ${utils.rem(40)};
  background-color: ${({ theme }) => theme.colors.primary[200]};
  box-shadow: ${sizes.shadow.sm};
  border-radius: 50%;
  font-size: ${font.size.xl};
  font-weight: 700;
`;
