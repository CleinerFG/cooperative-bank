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
