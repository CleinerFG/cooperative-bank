import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.xl};
`;

export const StyledFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
`;
