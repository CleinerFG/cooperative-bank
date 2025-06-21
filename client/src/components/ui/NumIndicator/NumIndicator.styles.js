import styled from 'styled-components';
import { font, sizes, gradients } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${sizes.spacing.md};
  gap: ${sizes.spacing.sm};
  border-radius: ${sizes.rounded.md};
  align-items: center;
  ${gradients.bgLinearGradient(100)}
  background-color: ${({ theme }) => theme.colors.primary[100]};
`;

export const StyledSubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const StyledValue = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${font.size.lg};
  font-weight: 700;
`;
