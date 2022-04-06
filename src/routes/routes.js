const routes = require("express").Router();
const { Router } = require("express");
const ReceitasController = require("../controllers/ReceitasController");

routes.get("/", ReceitasController.getAll);
routes.get("/cadastro", ReceitasController.cadastro);
routes.get("/contatos", ReceitasController.contatos);
routes.post("/add", ReceitasController.add);
routes.get('/getById/:id/:method', ReceitasController.getById);
module.exports = routes;
