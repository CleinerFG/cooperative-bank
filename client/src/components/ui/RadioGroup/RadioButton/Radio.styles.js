import styled from 'styled-components';
import { sizes, utils } from '@/styles/abstracts/';

export const StyledRadio = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  appearance: none;
  width: ${utils.rem(20)};
  height: ${utils.rem(20)};
  border: ${utils.rem(2)} solid ${({ theme }) => theme.colors.neutral[50]};
  border-radius: 50%;

  &:before {
    content: '';
    width: ${utils.rem(12)};
    height: ${utils.rem(12)};
    border-radius: 50%;
    background-color: transparent;
  }

  &:checked {
    border: ${utils.rem(2)} solid ${({ theme }) => theme.colors.secondary[300]};
    &:before {
      background-color: ${({ theme }) => theme.colors.secondary[300]};
    }
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${sizes.spacing.sm};
  padding: ${sizes.spacing.lg};
  border: solid 1px ${({ theme }) => theme.colors.neutral[50]};
  border-radius: ${sizes.rounded.lg};
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[10]};
  }
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${sizes.spacing.sm};

  svg {
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
  }
`;
