import RadioGroup from '../../../../components/ui/RadioGroup';
import { useTheme } from '@/hooks/theme';

import { Sun, Moon } from 'lucide-react';

const options = [
  { label: 'Dark', value: 'dark', Icon: Moon },
  { label: 'Light', value: 'light', Icon: Sun },
];

function ThemeRadioGroup() {
  const { currentTheme, changeTheme } = useTheme();

  return (
    <RadioGroup
      options={options}
      defaultValue={currentTheme}
      onRadioChecked={changeTheme}
      groupName="themeOptions"
    />
  );
}

export default ThemeRadioGroup;
