import styled from 'styled-components';
import { sizes, utils } from '@/styles/abstracts';

const sizeHeightMap = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 24,
  xl: 28,
  '2xl': 32,
  '3xl': 44,
};

const calculateContainerHeight = ({ $fontSize }) => {
  const px = sizeHeightMap[$fontSize];
  return utils.rem(px);
};

const calculateDotSize = ({ $fontSize }) => {
  const px = sizeHeightMap[$fontSize] / 2.25;
  return utils.rem(px);
};

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${calculateContainerHeight};
`;

export const StyledDotsContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.xs};
`;

export const StyledDot = styled.div`
  width: ${calculateDotSize};
  height: ${calculateDotSize};
  border-radius: 50%;
  background-color: ${({ $color = 'gray', theme }) =>
    theme.colors[$color][400]};
`;
