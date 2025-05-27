import { sizes, utils } from '@/styles/abstracts';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${sizes.spacing.lg};
  border: ${utils.rem(1)} solid;
  border-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${sizes.rounded.lg};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  cursor: pointer;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  ${({ $isExpanded }) => {
    const margin = $isExpanded ? sizes.spacing.lg : '0';
    const mHeight = $isExpanded ? '24rem' : '0';
    const opacity = $isExpanded ? '1' : '0';

    return css`
      margin-top: ${margin};
      max-height: ${mHeight};
      opacity: ${opacity};
    `;
  }}
`;
