const asyncWrapper = require("../middlewares/asyncWrapper");
const { Store } = require("../models/store");

const addStore = asyncWrapper(async (req, res) => {
  const store = await Store.create(req.body);

  return res.status(201).json({
    success: true,
    data: store,
  });
});

const getStores = asyncWrapper(async (req, res) => {
  const stores = await Store.find().sort("storeId");

  return res.status(200).json({
    success: true,
    count: stores.length,
    data: stores,
  });
});

const getStoreById = asyncWrapper(async (req, res) => {
  const store = await Store.findOne({ storeId: req.body.storeId });

  return res.status(200).json({
    success: true,
    data: store,
  });
});

module.exports = { addStore, getStores, getStoreById };
