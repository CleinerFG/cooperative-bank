import { NumericFormat, PatternFormat } from 'react-number-format';
import { StyledInput } from '../baseStyles';

function MaskedInput({
  maskType,
  inputType = 'text',
  onChange,
  value,
  onBlur,
  name,
  ref,
  ...props
}) {
  const commonProps = {
    value,
    name,
    onBlur,
    getInputRef: ref,
    ...props,
  };

  if (maskType === 'cpf') {
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

  if (maskType === 'currency') {
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
        onValueChange={(values) => onChange(values.floatValue)}
      />
    );
  }

  if (maskType === 'percentage') {
    return (
      <NumericFormat
        customInput={StyledInput}
        suffix=" %"
        decimalScale={2}
        allowNegative={false}
        fixedDecimalScale
        {...commonProps}
        onValueChange={(values) => onChange(values.floatValue)}
      />
    );
  }

  if (maskType === 'numericString') {
    return (
      <NumericFormat
        customInput={StyledInput}
        type={inputType}
        allowNegative={false}
        decimalScale={0}
        allowLeadingZeros
        valueIsNumericString
        {...commonProps}
        onValueChange={(values) => onChange(values.value)}
      />
    );
  }

  return (
    <StyledInput
      type={inputType}
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
