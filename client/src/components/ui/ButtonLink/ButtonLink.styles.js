import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gradients, sizes } from '@/styles/abstracts';

export const StyledLink = styled(Link)`
  ${gradients.bgLinearGradient()};
  padding: ${sizes.spacing.sm} ${sizes.spacing.md};
  border-radius: ${sizes.rounded.md};
  color: ${({ theme }) => theme.colors.gray[800]};
  font-weight: 700;
  text-align: center;
`;
