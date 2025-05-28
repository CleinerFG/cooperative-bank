import { useTranslation } from 'react-i18next';
import RadioGroup from '@/components/ui/RadioGroup';
import UsFlag from '@/components/flags/UsFlag';
import BrFlag from '@/components/flags/BrFlag';

const options = [
  { label: 'English', value: 'en', Icon: UsFlag },
  { label: 'Português', value: 'pt', Icon: BrFlag },
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
