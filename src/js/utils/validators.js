import { EmptyValueError, ZeroValueError } from "../errors/InputErrors.js";

export function emptyValidator(value) {
  if (value === "") throw new EmptyValueError();
};

export function zeroValidator(value) {
  const regex = /R\$\s0,00|0,00\s%|^0+$/;
  if (regex.test(value)) throw new ZeroValueError();
};

