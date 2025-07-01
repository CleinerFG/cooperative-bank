import styled from 'styled-components';
import { StyledContent } from '../baseStyles';
import { sizes } from '@/styles/abstracts';

export const StyledCroppedImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledImgContainer = styled(StyledContent)`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 350px;
    height: 100%;
    width: 100%;

    border-radius: ${sizes.rounded.md};
  }

  .ReactCrop {
    border-radius: 1rem;
    overflow: hidden;
  }

  @media (min-width: 475px) {
    img {
      max-height: 450px;
    }
  }

  @media (min-width: 575px) {
    img {
      max-height: 550px;
    }
  }

  @media (min-width: 675px) {
    img {
      max-height: 650px;
    }
  }
`;
