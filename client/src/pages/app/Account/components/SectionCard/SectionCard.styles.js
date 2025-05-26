import { sizes, utils } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${sizes.spacing.lg};
  gap: ${sizes.spacing.lg};
  border-radius: ${sizes.rounded.lg};
  border: ${utils.rem(1)} solid;
  border-color: ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
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
