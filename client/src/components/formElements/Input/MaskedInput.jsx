import { NumericFormat, PatternFormat } from 'react-number-format';
import { StyledInput } from '../baseStyles';

function MaskedInput({ type, onChange, value, onBlur, name, ref, ...props }) {
  const commonProps = {
    value,
    name,
    onBlur,
    getInputRef: ref,
    ...props,
  };

  if (type === 'cpf') {
    return (
      <PatternFormat
        customInput={StyledInput}
        format="###.###.###-##"
        mask="_"
        {...commonProps}
        onValueChange={(values) => onChange(values.value)}
      />
    );
  }

  if (type === 'currency') {
    return (
      <NumericFormat
        customInput={StyledInput}
        prefix="R$ "
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={2}
        allowNegative={false}
        fixedDecimalScale
        {...commonProps}
        onValueChange={(values) => onChange(values.floatValue ?? values.value)}
      />
    );
  }

  if (type === 'percentage') {
    return (
      <NumericFormat
        customInput={StyledInput}
        suffix=" %"
        decimalScale={2}
        allowNegative={false}
        fixedDecimalScale
        {...commonProps}
        onValueChange={(values) => onChange(values.floatValue ?? values.value)}
      />
    );
  }

  return (
    <StyledInput
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      ref={ref}
      {...props}
    />
  );
}

export default MaskedInput;
