import RadioGroup from '../../../../components/ui/RadioGroup';
import { useTheme } from '@/contexts/ThemeContext';

import { Sun, Moon } from 'lucide-react';

const options = [
  { label: 'Dark', value: 'dark', Icon: <Moon /> },
  { label: 'Light', value: 'light', Icon: <Sun /> },
];

function ThemeRadioGroup() {
  const { themeName, changeTheme } = useTheme();

  return (
    <RadioGroup
      options={options}
      defaultValue={themeName}
      onRadioChecked={changeTheme}
      groupName="themeOptions"
    />
  );
}

export default ThemeRadioGroup;
