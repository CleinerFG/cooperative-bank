import styled, { css } from 'styled-components';
import { font, sizes } from '@/styles/abstracts';
import { gradients } from '@/styles/abstracts';

export const StyledButton = styled.button`
  position: relative;
  border-radius: ${sizes.rounded.md};
  height: 2rem;
  font-size: ${font.size.md};

  ${({ theme, $active }) =>
    $active
      ? css`
          display: grid;
          grid-template-columns: 3fr 1fr;
          align-items: center;
          ${gradients.bgLinearGradient(200, 60)}
          font-weight: 600;
        `
      : css`
          background-color: ${theme.colors.gray[100]};
        `}
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const StyledCount = styled(StyledLabel)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 ${sizes.rounded.md} ${sizes.rounded.md} 0;
  ${gradients.bgLinearGradient(300, 60)}
`;
