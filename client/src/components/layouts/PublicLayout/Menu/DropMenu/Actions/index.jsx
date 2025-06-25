import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks/theme';
import { StyledContainer } from './Actions.styles';
import SwitchAction from './SwitchAction';
import { Moon, Sun } from 'lucide-react';
import UsFlag from '@/components/flags/UsFlag';
import BrFlag from '@/components/flags/BrFlag';

function Actions() {
  const { changeTheme, currentTheme } = useTheme();
  const { i18n } = useTranslation();

  const handleSwitchTheme = () =>
    changeTheme(currentTheme === 'dark' ? 'light' : 'dark');

  const handleSwitchLanguage = () =>
    i18n.changeLanguage(i18n.language === 'pt-BR' ? 'en' : 'pt-BR');

  return (
    <StyledContainer>
      <SwitchAction
        onClick={handleSwitchTheme}
        Icon={currentTheme === 'dark' ? Moon : Sun}
        label={currentTheme}
      />
      <SwitchAction
        onClick={handleSwitchLanguage}
        Icon={i18n.language === 'pt-BR' ? BrFlag : UsFlag}
        label={i18n.language === 'pt-BR' ? 'Português' : 'English'}
      />
    </StyledContainer>
  );
}

export default Actions;
