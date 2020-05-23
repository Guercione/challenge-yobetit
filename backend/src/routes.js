const express = require("express");
const router = express.Router();

const CountriesController = require("./controllers/CountriesController");

router.get("/countries", CountriesController.getCountries);

module.exports = router;
