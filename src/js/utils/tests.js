export function simulateWait(seconds = 1) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000 * seconds);
  });
}


// function generateRandomDates(size) {
//   const dates = [];
//   const startDate = new Date(2024, 0, 1); // 01/01/2024
//   const endDate = new Date(2024, 11, 31); // 31/12/2024

//   for (let i = 0; i < size; i++) {
//     const randomDate = new Date(startDate.getTime() + Math.random() * (endDate - startDate));
//     dates.push(randomDate.toISOString());
//   }

//   return dates;
// }

// const randomDates = generateRandomDates(20);
// randomDates.forEach(dateString => {
//   const dateObject = new Date(dateString);
//   console.log(dateObject);
// });
