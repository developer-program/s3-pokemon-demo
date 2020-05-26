const express = require("express");
const Pokemon = require("../models/pokemon.model");
// const pokemonData = require("../data/pokemon");

const router = express.Router();

router.get("/", async (req, res) => {
  const pokemonData = await Pokemon.find({});

  res.json(pokemonData);
});

module.exports = router;
