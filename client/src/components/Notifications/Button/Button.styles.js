import styled from 'styled-components';
import { font, sizes, utils } from '@/styles/abstracts';

export const StyledButton = styled.button`
  position: relative;

  svg {
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
  }
`;

export const StyledCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${utils.rem(-2)};
  right: ${utils.rem(-6)};
  background-color: ${({ theme }) => theme.colors.cta[100]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: 50%;
  font-size: ${font.size.xs};
  width: ${sizes.icon.xs};
  height: ${sizes.icon.xs};
`;
