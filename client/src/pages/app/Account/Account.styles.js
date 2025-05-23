import { sizes, utils } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${utils.rem(40)};
`;

export const StyledPersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.lg};
`;
