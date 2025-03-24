module.exports = (res, result, customResponse) => {
  if (!result) return res.status(204).json();

  if (result.error) {
    if (result.error === 'client') {
      return res.status(400).json(result);
    }
    return res.status(500).json(result);
  }

  if (customResponse) return customResponse();
  return res.json(result);
};
