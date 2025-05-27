import { font, sizes, utils } from '@/styles/abstracts';
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
  border: solid ${utils.rem(1)};
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const StyledProgress = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary[300]},
    ${({ theme }) => theme.colors.secondary[300]}
  );
  border-radius: ${sizes.rounded.md};
  height: 100%;
  width: ${({ $percent = 0 }) => $percent + '%'};
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: 500;
  font-size: ${font.size.sm};
`;
