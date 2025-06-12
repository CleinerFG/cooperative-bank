import { font, gradients, sizes, utils } from '@/styles/abstracts';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  gap: ${sizes.spacing.md};
  flex-direction: row;
  align-items: center;
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const StyledName = styled.span`
  font-size: ${font.size.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const StyledImgContainer = styled.div`
  ${gradients.bgLinearGradient(200)}
  width: ${utils.rem(50)};
  height: ${utils.rem(50)};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${sizes.spacing.md};
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const StyledDate = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
`;
