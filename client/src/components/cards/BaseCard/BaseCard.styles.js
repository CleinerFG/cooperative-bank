import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const CARD_SPACING = sizes.spacing.lg;

export const StyledContainer = styled.div`
  display: flex;
  gap: ${CARD_SPACING};
  flex-direction: column;
  padding: ${CARD_SPACING};
  border-radius: ${sizes.rounded.lg};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  ${sizes.border.sm};
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${sizes.spacing.md};
`;

export const StyledIconContainer = styled.div`
  svg {
    stroke: ${({ theme, $isColored }) =>
      $isColored ? theme.colors.secondary[400] : theme.colors.gray[800]};
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
  }
`;

export const StyledTitle = styled.h2`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const StyledFooter = styled.footer`
  display: flex;
  gap: ${sizes.spacing.md};
  flex-wrap: wrap;
`;
