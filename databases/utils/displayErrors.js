module.exports = (error) => {
  if (error.errors) {
    error.errors.forEach((err, idx) => {
      console.error(`-->[${idx}] ${err.code}: ${err.message}`);
    });
  } else {
    console.error(error.message || JSON.stringify(error));
  }
};
