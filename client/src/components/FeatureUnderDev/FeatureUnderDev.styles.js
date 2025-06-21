import styled from 'styled-components';
import { font, sizes } from '@/styles/abstracts';
import { spacing } from '@/styles/abstracts/sizes';

export const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: ${sizes.spacing.md};

  svg {
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
    stroke: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const StyledContent = styled.main``;

export const StyledTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
`;

export const StyledText = styled.p`
  font-family: ${font.family.info};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const StyledFooter = styled.footer`
  display: grid;
`;
