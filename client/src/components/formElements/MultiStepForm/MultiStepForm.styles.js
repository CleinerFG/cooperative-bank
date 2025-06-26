import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export const StyledMultiStepForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing['2xl']};
  width: 100%;
  max-width: 500px;
  margin: ${sizes.spacing.lg};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  padding: ${sizes.spacing.xl};
  border-radius: ${sizes.rounded.lg};
  ${sizes.border.sm}
  box-shadow: ${sizes.shadow.md};
`;

export const StyledContent = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.md};
`;
