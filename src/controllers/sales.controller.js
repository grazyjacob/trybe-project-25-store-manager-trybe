const salesService = require('../services/sales.service');

const postSale = async (req, res) => {
  const arraySales = req.body;
  const { type, message, id } = await salesService.createSale(arraySales);
  if (type) return res.status(type).json({ message });
  return res.status(201).json({ id, itemsSold: message });
};

module.exports = {
  postSale,
};