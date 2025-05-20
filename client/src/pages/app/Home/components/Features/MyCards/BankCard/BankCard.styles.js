import styled from 'styled-components';
import { font, sizes, utils } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  min-width: ${utils.rem(250)};
  height: ${utils.rem(150)};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.secondary[100]},
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
`;

export const StyledType = styled(StyledDetails)`
  svg {
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
    stroke-width: 5%;
  }
`;

export const StyledSpan = styled.span`
  font-size: ${font.size.xs};
`;
