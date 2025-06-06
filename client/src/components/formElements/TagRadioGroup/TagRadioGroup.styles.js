import styled from 'styled-components';
import { StyledContainer } from '../baseFieldStyles';
import { sizes } from '@/styles/abstracts';

export const StyledFieldset = styled(StyledContainer).attrs({
  as: 'fieldset',
})`
  padding: ${sizes.spacing.md};
  border-radius: ${sizes.rounded.md};
  ${sizes.border.md};
`;

export const StyledRadiosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${sizes.spacing.sm};
`;
