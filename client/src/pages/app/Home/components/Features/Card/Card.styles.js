import styled, { css } from 'styled-components';
import StyledCard from '@/components/containers/StyledCard';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled(StyledCard)`
  flex-direction: column;
  gap: 0;
  overflow: hidden;
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
