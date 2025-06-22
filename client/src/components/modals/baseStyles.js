import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: ${sizes.spacing.sm};
  padding: ${sizes.spacing.md} ${sizes.spacing.xl};
  ${sizes.border.sm}
  border-top: 0;
  border-left: 0;
  border-right: 0;
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const StyledIconContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  padding: ${sizes.spacing.md};
  border-radius: 50%;

  svg {
    stroke: ${({ theme }) => theme.colors.gray[700]};
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
  }
`;

export const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.xl};
  padding: ${sizes.spacing.xl};
`;

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${sizes.spacing.md};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  padding: ${sizes.spacing.xl};
`;
