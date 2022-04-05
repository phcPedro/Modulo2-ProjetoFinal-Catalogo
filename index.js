require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
const path = require("path");
const routes = require("./src/routes/routes");

app.use(routes);
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
