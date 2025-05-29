import { font, sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${sizes.spacing.sm};
`;

export const StyledInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray[800]};
  font-size: ${font.size.md};
  padding: ${sizes.spacing.lg} ${sizes.spacing.md};
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  ${sizes.border.md}
  border-radius: ${sizes.rounded.md};
  transition: 0.2s ease-in-out all;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.secondary[250]};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.secondary[100]};
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${font.size.md};
  font-weight: 500;
`;
