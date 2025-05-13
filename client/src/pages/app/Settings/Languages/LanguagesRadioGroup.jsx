import { useTranslation } from 'react-i18next';
import RadioGroup from '../../../../components/ui/RadioGroup';

const options = [
  { label: 'English', value: 'en' },
  { label: 'Português', value: 'pt' },
];

function LanguagesRadioGroup() {
  const { i18n } = useTranslation();
  return (
    <RadioGroup
      options={options}
      defaultValue={i18n.language}
      onRadioChecked={i18n.changeLanguage}
      groupName="languagesOptions"
    />
  );
}

export default LanguagesRadioGroup;
