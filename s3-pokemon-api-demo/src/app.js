require("./utils/db");
const cors = require("cors");
const express = require("express");
const pokemonRouter = require("./routes/pokemon.route");
const app = express();

app.use(cors());
app.use("/pokemons", pokemonRouter);
app.get("/", (req, res) => res.send("Hello World!"));

module.exports = app;
