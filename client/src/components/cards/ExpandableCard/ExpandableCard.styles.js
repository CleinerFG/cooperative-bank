import styled, { css } from 'styled-components';
import {
  StyledCardContainer,
  CARD_SPACING,
} from '@/components/cards/StyledBaseCard';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled(StyledCardContainer)`
  flex-direction: column;
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
    const margin = $isExpanded ? '0' : css`calc(0rem - ${CARD_SPACING})`;
    const mHeight = $isExpanded ? '24rem' : '0';
    const opacity = $isExpanded ? '1' : '0';

    return css`
      margin-top: ${margin};
      max-height: ${mHeight};
      opacity: ${opacity};
    `;
  }}
`;
