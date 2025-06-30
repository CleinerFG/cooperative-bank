import styled from 'styled-components';

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

export const StyledCroppedImage = styled.img`
  width: 100%;
  height: 100%;
`;
