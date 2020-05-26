const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: {
    english: String,
    japanese: String,
    chinese: String,
  },
  type: [String],
  base: {
    HP: Number,
    Attack: Number,
    Defence: Number,
    SpAttack: Number,
    SpDefence: Number,
    Speed: Number,
  },
  imageUrl: String,
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
