import Input from '../Input';
import ToogleShow from './ToggleShow';
import { useState } from 'react';

function PasswordInput({ control, name, label, isNumeric }) {
  const [show, setShow] = useState(false);

  return (
    <Input
      control={control}
      name={name}
      label={label}
      inputType={show ? 'text' : 'password'}
      maskType={isNumeric ? 'numericString' : ''}
      ToolButtons={<ToogleShow show={show} onToggle={() => setShow(!show)} />}
    />
  );
}

export default PasswordInput;
