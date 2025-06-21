export function findRepetition(value) {
  if (!value) return null;
  const regex = new RegExp(/(.)\1{2,}/);
  const match = value.match(regex);
  return match ? match[0] : null;
}

export function findSequence(value) {
  if (!value) return null;

  const input = value.toLowerCase();
  const sequence = '0123456789abcdefghijklmnopqrstuvwxyz';
  const minLength = 3;

  for (let i = 0; i <= input.length - minLength; i++) {
    const chunk = input.slice(i, i + minLength);

    // Check if chunk exists in sequence or in reversed sequence
    if (
      sequence.includes(chunk) ||
      sequence.split('').reverse().join('').includes(chunk)
    ) {
      return chunk;
    }
  }

  return null;
}

export function cpfIsValid(value) {
  value = value.replace(/[.-]/g, '');

  if (!/^[0-9]{11}$/.test(value)) return false;

  if (/^(\d)\1{10}$/.test(value)) return false;

  let sum = 0,
    remainder;

  for (let i = 1; i <= 9; i++) sum += parseInt(value[i - 1]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(value[9])) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(value[i - 1]) * (12 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(value[10])) return false;

  return true;
}