import { sizes, utils } from '@/styles/abstracts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CARD_SPACING = sizes.spacing.lg;

export const StyledCardContainer = styled.div`
  display: flex;
  gap: ${CARD_SPACING};
  padding: ${CARD_SPACING};
  border-radius: ${sizes.rounded.lg};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  border: solid ${utils.rem(1)};
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const StyledCardText = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: 500;
`;

export const StyledCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.gray[800]};
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
  }
`;

export const StyledCardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const StyledCardFooter = styled.footer`
  display: flex;
  gap: ${sizes.spacing.md};
  flex-wrap: wrap;
`;

export const StyledCardLink = styled(Link)`
  align-self: flex-end;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary[300]},
    ${({ theme }) => theme.colors.secondary[300]}
  );
  padding: ${sizes.spacing.sm} ${sizes.spacing.md};
  border-radius: ${sizes.rounded.md};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 500;
`;
