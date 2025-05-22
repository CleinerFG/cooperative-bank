import styled from 'styled-components';
import { Camera } from 'lucide-react';
import { sizes, utils } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: ${utils.rem(-20)};
  transform: translateX(-50%);
  width: ${sizes.icon.xl};
  height: ${sizes.icon.xl};
  box-shadow: ${utils.rem(1)} ${utils.rem(1)} ${utils.rem(5)} rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral[10]};
`;

export const StyledCameraIcon = styled(Camera)`
  width: ${sizes.icon.sm};
  height: ${sizes.icon.sm};
`;
