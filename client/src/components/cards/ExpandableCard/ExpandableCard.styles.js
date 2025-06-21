import styled, { css } from 'styled-components';
import * as baseCard from '@/components/cards/BaseCard/BaseCard.styles';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled(baseCard.StyledContainer)`
  overflow: hidden;
  cursor: pointer;
`;

export const StyledHiddenContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  ${({ $isExpanded }) => {
    const margin = $isExpanded
      ? '0'
      : css`calc(0rem - ${baseCard.CARD_SPACING})`;
    const mHeight = $isExpanded ? '24rem' : '0';
    const opacity = $isExpanded ? '1' : '0';

    return css`
      margin-top: ${margin};
      max-height: ${mHeight};
      opacity: ${opacity};
    `;
  }}
`;
