import styled from 'styled-components';
import { StyledContainer } from '@/components/cards/BaseCard/BaseCard.styles';
import { sizes } from '@/styles/abstracts';

export const StyledSection = styled(StyledContainer)`
  flex-direction: column;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: ${sizes.spacing.md};

  svg {
    stroke: ${({ theme }) => theme.colors.primary[300]};
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 600;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${sizes.spacing.md};
`;
