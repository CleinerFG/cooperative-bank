import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sizes } from '@/styles/abstracts';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary[500]};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${sizes.spacing.xs};

  &:hover {
    text-decoration: underline;
  }

  svg {
    stroke: ${({ theme }) => theme.colors.secondary[500]};
  }
`;
