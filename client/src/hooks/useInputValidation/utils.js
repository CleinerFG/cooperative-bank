export function getValidationResult(value, rules) {
  const errors = rules
    .filter((rule) => rule.test(value))
    .map((rule) => rule.message);

  const isValid = errors.length === 0;

  return { isValid, errors };
}
