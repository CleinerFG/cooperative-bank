import styled from 'styled-components';
import { StyledForm } from '@/components/formElements/StyledForm';
import { sizes } from '@/styles/abstracts';

export const StyledLoginForm = styled.form`
  padding: ${sizes.spacing['2xl']};
  border-radius: ${sizes.rounded.xl};
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  margin: ${sizes.spacing.md};

  display: grid;
  gap: ${sizes.spacing.lg};
  justify-content: center;
  align-items: center;
  grid-template-rows: 2fr 3fr;
  box-shadow: ${sizes.shadow.md};

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${sizes.spacing.md};

  img {
    width: 8rem;
    height: auto;
  }

  @media (min-width: 768px) {
    img {
      width: 15rem;
    }
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.spacing.lg};
`;

export const StyledFooter = styled.footer`
  display: grid;
`;
