module.exports = (res, serviceResult) => {
  if (
    serviceResult === null ||
    (Array.isArray(serviceResult) && serviceResult.length === 0)
  ) {
    return res.status(204).json({});
  }

  if (serviceResult.error) {
    if (serviceResult.error === 'client') {
      return res.status(400).json(serviceResult);
    }
    return res.status(500).json(serviceResult);
  }

  return res.json(serviceResult);
};
