import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';
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
    stroke: ${({ theme }) => theme.colors.gray[800]};
    stroke-width: 2.2;
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[800]};
  font-weight: 700;
`;

export const StyledContent = styled.main``;

export const StyledImg = styled.img`
  width: 100%;
  max-height: 15rem;
`;

export const StyledTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
`;

export const StyledFooter = styled.footer`
  display: grid;
`;
