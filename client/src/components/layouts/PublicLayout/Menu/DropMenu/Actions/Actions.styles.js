import styled from 'styled-components';
import { font, sizes } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${sizes.spacing.sm};
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${sizes.spacing.sm};
  padding: ${sizes.spacing.xs} ${sizes.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${font.size.md};
`;
