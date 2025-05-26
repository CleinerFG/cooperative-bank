import styled from 'styled-components';
import { sizes, utils } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  gap: ${sizes.spacing.xs};
`;

const calculateSize = ({ $size = 16 }) => utils.rem($size);
const getColor = ({ $color = 'gray', theme }) => theme.colors[$color][400];

export const StyledDot = styled.div`
  width: ${calculateSize};
  height: ${calculateSize};
  border-radius: 50%;
  background-color: ${getColor};
`;
