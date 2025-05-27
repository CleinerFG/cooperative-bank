import styled from 'styled-components';
import { StyledCardHeader } from '@/components/cards/StyledBaseCard';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled(StyledCardHeader)`
  position: relative;
`;

export const StyledIconContainer = styled.div`
  padding: ${sizes.spacing.md};
  border-radius: ${sizes.rounded.lg};
  background-color: ${({ theme }) => theme.colors.primary[200]};

  svg {
    stroke: ${({ theme }) => theme.colors.gray[800]};
    width: ${sizes.icon.lg};
    height: ${sizes.icon.lg};
  }
`;

export const StyledContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: ${sizes.spacing.md};
  align-items: center;
`;

export const StyledColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
