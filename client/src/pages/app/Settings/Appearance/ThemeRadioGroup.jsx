import RadioGroup from '../../../../components/ui/RadioGroup';
import { useTheme } from '../../../../contexts/theme';

import { Sun, Moon } from 'lucide-react';

const options = [
  { label: 'Dark', value: 'dark', Icon: Moon },
  { label: 'Light', value: 'light', Icon: Sun },
];

function ThemeRadioGroup() {
  const { theme, updateTheme } = useTheme();

  return (
    <RadioGroup
      options={options}
      defaultValue={theme}
      onRadioChecked={updateTheme}
      groupName="themeOptions"
    />
  );
}

export default ThemeRadioGroup;
