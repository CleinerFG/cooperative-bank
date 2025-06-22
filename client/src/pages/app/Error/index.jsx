import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@/components/formElements/Button';
import StyledText from '@/components/ui/StyledText';
import { StyledContainer, StyledImg } from './Error.styles';

export default function ErrorPage() {
  const error = useRouteError();
  const { t } = useTranslation();
  const navigate = useNavigate();

  let title = t('unexpectedError');
  let text = t('unexpectedErrorTxt');
  let imgSrc = '/unexpected-error.svg';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = t('notFound404');
      text = t('notFound404Txt');
      imgSrc = t('/error404.svg');
    }
  }

  return (
    <StyledContainer>
      <h1>{title}</h1>
      <StyledImg src={imgSrc} alt="Error Icon" />
      <StyledText>{text}</StyledText>
      <Button handleClick={() => navigate(-1)}>{t('back')}</Button>
    </StyledContainer>
  );
}
