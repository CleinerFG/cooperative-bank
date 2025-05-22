import styled from 'styled-components';
import { sizes } from '@/styles/abstracts';

export default styled.section`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.lg};
  padding: ${sizes.spacing.lg};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-radius: ${sizes.rounded.xl};
  box-shadow: ${sizes.shadow.sm};
`;
