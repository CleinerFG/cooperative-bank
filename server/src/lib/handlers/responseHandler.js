module.exports = (res, result, customResponse) => {
  if (!result) return res.status(204).json()
    
  if (result.error) return res.status(400).json(result);

  if (customResponse) return customResponse();
  return res.json(result);
};
