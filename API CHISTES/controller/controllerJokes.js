const Jokes = require("../models/modeloJokes.js");

const todosLosJokes = (req, res) => {
  Jokes.find()
    .then((jokes) => {
      res.status(200).json(jokes);
    })
    .catch((err) => {
      res.status(500).json({ message: "No se pudo obtener los datos" });
    });
};

const jokeById = (req, res) => {
  const id = req.params.id;
  Jokes.findById(id)
    .then((joke) => {
      res.status(200).json(joke);
    })
    .catch((err) => {
      res.status(500).json({ message: "No se encontraron los datos" });
    });
};

const jokeRandom = (req, res) => {
  Jokes.countDocuments()
    .then((count) => {
      const randomIndex = Math.floor(Math.random() * count);
      return Jokes.findOne().skip(randomIndex);
    })
    .then((joke) => {
      if (joke) {
        res.status(200).json(joke);
      } else {
        res.status(404).json({ message: "No se encontró el chiste" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error interno del servidor" });
    });
};

const addJoke = (req, res) => {
  const { setup, punchline } = req.body;
  Jokes.create({ setup, punchline })
    .then((jokeCreado) => {
      res.status(201).json(jokeCreado);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error interno del servidor" });
    });
};

const updateJoke = (req, res) => {
  const id = req.params.id;
  const newSetup = req.body.setup;
  Jokes.updateOne({ _id: id }, { setup: newSetup })
    .then((jokeActualizado) => {
      res.status(200).json(jokeActualizado);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error interno del servidor" });
    });
};

const deleteJoke = (req, res) => {
  const id = req.params.id;
  Jokes.deleteOne({ _id: id })
    .then(() => {
      res.status(200).end( "Elimando con exito" );
    })
    .catch((err) => {
      res.status(500).json({ message: "Error interno del servidor" });
    });
};

module.exports = {
  todosLosJokes,
  jokeById,
  jokeRandom,
  addJoke,
  updateJoke,
  deleteJoke
};
