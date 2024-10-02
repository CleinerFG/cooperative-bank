export function simulateWait(seconds = 1) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 * seconds);
  });
}
