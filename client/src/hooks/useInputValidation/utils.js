export function getValidationResult(tempValue, rules) {
  const errors = rules
    .filter((rule) => !rule.test(tempValue))
    .map((rule) => rule.message);

  const isValid = errors.length === 0;

  return { isValid, errors };
}
