import { font, sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.xl};
  padding: ${sizes.spacing.lg};
`;

export const StyledText = styled.p`
  font-family: ${font.family.info};
`;
