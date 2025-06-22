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
  background-color: ${({ theme }) => theme.colors.red[500]};
  color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 50%;
  font-size: ${font.size.xs};
  font-weight: 600;
  width: ${sizes.icon.xs};
  height: ${sizes.icon.xs};
`;
