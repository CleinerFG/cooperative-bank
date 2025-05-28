import styled from 'styled-components';
import { StyledCardContainer } from '@/components/cards/StyledBaseCard';
import { sizes } from '@/styles/abstracts';

export const StyledSection = styled(StyledCardContainer)`
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
