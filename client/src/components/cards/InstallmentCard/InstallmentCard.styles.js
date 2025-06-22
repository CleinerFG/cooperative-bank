import styled from 'styled-components';
import { font, sizes } from '@/styles/abstracts';

const configByStatus = ({ $status, theme }) => {
  let baseColor = null;

  switch ($status) {
    case 'pending':
      baseColor = 'yellow';
      break;
    case 'overdue':
      baseColor = 'red';
      break;
    case 'paid':
      baseColor = 'green';
      break;
    default:
      baseColor = 'gray';
  }

  return {
    color: theme.colors[baseColor][800],
    iconColor: theme.colors[baseColor][600],
    bg: theme.colors[baseColor][100],
  };
};

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  ${sizes.border.sm}
  display: flex;
  gap: ${sizes.spacing.lg};
  flex-direction: column;
  border-radius: ${sizes.rounded.lg};
  padding: ${sizes.spacing.lg};
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: ${sizes.spacing.md};

  svg {
    stroke: ${({ $status, theme }) =>
      configByStatus({ $status, theme }).iconColor};
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
  }
`;

export const StyledStatus = styled.span`
  margin-left: auto;
  font-weight: 600;
  color: ${({ $status, theme }) => configByStatus({ $status, theme }).color};
  background-color: ${({ $status, theme }) =>
    configByStatus({ $status, theme }).bg};
  padding: ${sizes.spacing.sm} ${sizes.spacing.md};
  border-radius: ${sizes.rounded.md};
`;

export const StyledSequence = styled.span`
  font-weight: 700;
  font-size: ${font.size.lg};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const StyledContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.sm};
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const StyledValue = styled.span`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 700;
`;

export const StyledFooter = styled.footer`
  display: grid;
`;
