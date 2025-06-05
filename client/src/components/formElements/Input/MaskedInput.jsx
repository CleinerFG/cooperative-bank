import { NumericFormat, PatternFormat } from 'react-number-format';
import { StyledInput } from '../baseStyles';

function MaskedInput({ type, ...props }) {
  switch (type) {
    case 'cpf':
      return (
        <PatternFormat
          customInput={StyledInput}
          format="###.###.###-##"
          mask="_"
          {...props}
        />
      );

    case 'currency':
      return (
        <NumericFormat
          customInput={StyledInput}
          prefix="R$ "
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale
          {...props}
        />
      );

    case 'percentage':
      return (
        <NumericFormat
          customInput={StyledInput}
          suffix=" %"
          decimalScale={2}
          fixedDecimalScale
          {...props}
        />
      );

    default:
      return <StyledInput {...props} />;
  }
}

export default MaskedInput;
