import styled, { css } from 'styled-components';
import { font, sizes } from '@/styles/abstracts';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${sizes.spacing.md};
`;

export const StyledIconWrapper = styled.div`
  padding: ${sizes.spacing.lg};
  border-radius: ${sizes.rounded.lg};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
  }

  ${({ theme, $type }) => {
    const color = $type === 'inflow' ? 'green' : 'red';
    const bg = theme.colors[color][100];
    const iconColor = theme.colors[color][600];

    return css`
      background-color: ${bg};

      svg {
        stroke: ${iconColor};
      }
    `;
  }}
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${sizes.spacing.md};
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const StyledValueContainer = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
`;

export const StyledValue = styled.span`
  font-weight: 600;
  font-size: ${font.size.lg};

  color: ${({ $type, theme }) => {
    const color = $type === 'inflow' ? 'green' : 'red';
    return theme.colors[color][600];
  }};
`;
