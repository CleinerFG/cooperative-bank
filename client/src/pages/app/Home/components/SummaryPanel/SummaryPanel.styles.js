import styled from 'styled-components';
import StyledSection from '@/pages/app/Home/components/StyledSection';
import { sizes } from '@/styles/abstracts';

export const StyledContainer = styled(StyledSection)`
  border: none;
  box-shadow: ${sizes.shadow.sm};
  padding: ${sizes.spacing.xl} ${sizes.spacing.lg};
  margin-bottom: ${sizes.spacing.xl};
`;
