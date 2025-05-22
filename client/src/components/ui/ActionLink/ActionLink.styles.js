import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { font, sizes, utils } from '@/styles/abstracts';

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.xs};
  align-items: center;
  width: ${utils.rem(65)};

  &:hover {
    font-weight: 500;
    transform: scale(105%);
  }
`;

export const StyledIconContainer = styled.div`
  padding: ${sizes.spacing.md};
  border-radius: ${({ $rounded }) => ($rounded ? sizes.rounded.md : '50%')};
  background-color: ${({ theme }) => theme.colors.primary[200]};
`;

export const StyledLabel = styled.span`
  font-size: ${font.size.sm};
`;
