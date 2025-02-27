import { SIMULATE_SERVER_WAIT } from '../constants/config.js';

/**
 * @param {number} [seconds=2]
 * @returns {Promise}
 */
export function simulateWait(seconds = SIMULATE_SERVER_WAIT) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 * seconds);
  });
}

/**
 * Generates an array of random dates.
 * The generated dates are returned as ISO strings.
 *
 * @param {number} size
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
