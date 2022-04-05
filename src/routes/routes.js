const routes = require('express').Router();
const ReceitasController = require('../controllers/ReceitasController');



routes.get('/', ReceitasController.getAll);
routes.get('/cadastro', ReceitasController.cadastro);

module.exports = routes;