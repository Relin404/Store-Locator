const express = require("express");

const { addStore, getStores, getStoreById } = require("../controllers/stores");

const router = express.Router();

router.post("/", addStore);

router.get("/", getStores);

router.post("/:id", getStoreById);

module.exports = router;
