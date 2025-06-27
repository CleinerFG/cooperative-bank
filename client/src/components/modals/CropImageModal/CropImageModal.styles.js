import { sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${sizes.spacing.lg};
  padding: ${sizes.spacing.lg};
`;

export const StyledCropContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  @media (min-width: 475px) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: 575px) {
    width: 500px;
    height: 500px;
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[700]};
  padding-right: 3rem;
`;

export const StyledCroppedImage = styled.img`
  width: 100%;
  height: 100%;
`;
