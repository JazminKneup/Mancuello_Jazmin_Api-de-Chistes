const express = require("express");
const RoutesJokes = require("./routes/routesJokes.js");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/conexion.js");

RoutesJokes(app);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
