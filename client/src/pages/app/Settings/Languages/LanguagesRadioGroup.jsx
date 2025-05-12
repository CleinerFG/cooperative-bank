import RadioGroup from '../../../../components/ui/RadioGroup';

const options = [
  { label: 'English', value: 'en'},
  { label: 'Português', value: 'pt' },
];

function LanguagesRadioGroup() {
  return (
    <RadioGroup
      options={options}
      defaultValue={null}
      onRadioChecked={null}
      groupName="languagesOptions"
    />
  );
}

export default LanguagesRadioGroup;
