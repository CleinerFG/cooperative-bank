/**
 * Simulates a waiting period by returning a promise that resolves after a specified number of seconds.
 *
 * This function is used for simulating delays, such as waiting for API responses during testing.
 *
 * @param {number} [seconds=1] - The number of seconds to wait before resolving the promise. Default is 1 second.
 * @returns {Promise} A promise that resolves after the specified wait time.
 *
 * @example
 * // Simulates a 3-second wait
 * await simulateWait(3);
 */
export function simulateWait(seconds = 1) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 * seconds);
  });
}

/**
 * Generates an array of random dates.
 * The generated dates are returned as ISO strings.
 *
 * @param {number} size - The number of random dates to generate.
 * @returns {string[]} An array of random date strings in ISO format (e.g. '2024-04-15T08:23:45.000Z').
 */
function generateRandomDates(size) {
  const dates = [];
  const startDate = new Date(2024, 0, 1); // 01/01/2024
  const endDate = new Date(2024, 11, 31); // 31/12/2024

  for (let i = 0; i < size; i++) {
    const randomDate = new Date(
      startDate.getTime() + Math.random() * (endDate - startDate)
    );
    dates.push(randomDate.toISOString());
  }

  return dates;
}

// const randomDates = generateRandomDates(20);
// randomDates.forEach(dateString => {
//   const dateObject = new Date(dateString);
//   console.log(dateObject);
// });
