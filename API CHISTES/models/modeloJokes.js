const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: true
  },
  punchline: {
    type: String,
    required: true
  }
});

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;
