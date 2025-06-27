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
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: ${utils.rem(-20)};
  transform: translateX(-50%);
  width: ${sizes.icon.xl};
  height: ${sizes.icon.xl};
  box-shadow: ${sizes.shadow.md};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(-50%) scale(1.05);
  }

  &:active {
    transform: translateX(-50%) scale(0.95);
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const StyledCameraIcon = styled(Camera)`
  width: ${sizes.icon.sm};
  height: ${sizes.icon.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;
