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
  gap: ${sizes.spacing.sm};
  justify-content: space-between;
  width: 100%;
  align-items: center;

  label {
    cursor: pointer;
  }
`;
