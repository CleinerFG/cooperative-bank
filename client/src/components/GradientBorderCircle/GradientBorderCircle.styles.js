import styled from 'styled-components';
import { utils } from '@/styles/abstracts';

const DEFAULT_SIZE = 128;

const calculatePadding = (sizePx = DEFAULT_SIZE) => {
  const value = Math.round(sizePx / 22);
  return utils.rem(value);
};

const calculateSize = (sizePx = DEFAULT_SIZE) => {
  return utils.rem(sizePx);
};

export const StyledContainer = styled.div`
  width: ${({ $sizePx }) => calculateSize($sizePx)};
  height: ${({ $sizePx }) => calculateSize($sizePx)};
  border-radius: 50%;
  padding: ${({ $sizePx }) => calculatePadding($sizePx)};
  background: conic-gradient(
    ${({ theme }) => theme.colors.primary[300]},
    ${({ theme }) => theme.colors.secondary[200]},
    ${({ theme }) => theme.colors.primary[300]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMask = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 50%;
`;
