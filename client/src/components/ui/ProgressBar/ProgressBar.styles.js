import { font, gradients, sizes } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${sizes.spacing.sm};
`;

export const StyledBar = styled.div`
  width: 100%;
  height: 1rem;
  overflow: hidden;
  border-radius: ${sizes.rounded.md};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  ${sizes.border.sm}
`;

export const StyledProgress = styled.div`
  ${gradients.bgLinearGradient()}
  border-radius: ${sizes.rounded.md};
  height: 100%;
  width: ${({ $percent = 0 }) => $percent + '%'};
  transition: all 0.5s;
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ $haveLabel }) =>
    $haveLabel ? 'space-between' : 'flex-end'};
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: 500;
  font-size: ${font.size.sm};
`;
