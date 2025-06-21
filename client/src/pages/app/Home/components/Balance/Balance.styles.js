import styled from 'styled-components';
import * as baseCard from '@/components/cards/BaseCard/BaseCard.styles';
import { font, sizes } from '@/styles/abstracts';

export const StyledContainer = styled(baseCard.StyledContainer)`
  flex-direction: column;
  gap: ${sizes.spacing.xs};
  border-radius: 0 0 ${sizes.rounded['2xl']} ${sizes.rounded['2xl']};
`;

export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: ${font.size.sm};
  font-weight: bold;
`;

export const StyledValue = styled.div`
  display: flex;
  gap: ${sizes.spacing.xs};
  align-items: center;
  font-size: ${font.size['2xl']};
  font-weight: bold;
`;
