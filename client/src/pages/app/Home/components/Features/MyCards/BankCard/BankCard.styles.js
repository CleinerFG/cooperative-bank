import styled from 'styled-components';
import { font, sizes, utils } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  min-width: ${utils.rem(250)};
  height: ${utils.rem(150)};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[200]},
    ${({ theme }) => theme.colors.secondary[300]}
  );
  border-radius: ${sizes.rounded.lg};
  padding: ${sizes.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${sizes.shadow.md};
`;

export const StyledCardNumber = styled.div`
  font-size: ${font.size.lg};
  letter-spacing: ${utils.rem(2)};
`;

export const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: ${sizes.spacing.xs};
  }
`;

export const StyledType = styled(StyledDetails)`
  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  svg {
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
    stroke-width: 5%;
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${font.size.xs};
`;
