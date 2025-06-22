import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledTextsContainer,
} from './FeatureUnderDev.styles';
import { StyledContainer, StyledTitle } from './FeatureUnderDev.styles';
import StyledText from '@/components/ui/StyledText';
import { FileCode2 } from 'lucide-react';
import Button from '../formElements/Button';

function FeatureUnderDev() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledHeader>
        <FileCode2 />
        <StyledTitle> {t('featureUnderDev')}</StyledTitle>
      </StyledHeader>
      <StyledContent>
        <img src="/under-dev.svg" alt="Under Development Page" />
        <StyledTextsContainer>
          <StyledText>{t('featureUnderDevTxt1')}</StyledText>
          <StyledText>{t('featureUnderDevTxt2')}</StyledText>
          <StyledText>{t('featureUnderDevTxt3')}</StyledText>
        </StyledTextsContainer>
      </StyledContent>
      <StyledFooter>
        <Button handleClick={() => navigate(-1)}>{t('back')}</Button>
      </StyledFooter>
    </StyledContainer>
  );
}

export default FeatureUnderDev;
