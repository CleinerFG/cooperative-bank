import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';
import { sizes } from '@/styles/abstracts';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${sizes.spacing.xs};
`;

export const StyledIcon = styled(ChevronDown)`
  stroke: ${({ theme }) => theme.colors.gray[500]};
  width: ${sizes.icon.sm};
  height: ${sizes.icon.sm};

  transition: transform ease-in-out 0.3s;
  transform: rotate(${({ $rotate }) => $rotate + 'deg'});
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
`;
