const express = require('express');

const routes = express.Router();

const ProdutoController = require('./controllers/ProdutoController');

routes.get("/produtos", ProdutoController.listar);

routes.get("/produtos/:id", ProdutoController.pesquiarPorId);

routes.post("/produtos", ProdutoController.incluir);

routes.put("/produtos/:id", ProdutoController.alterar);

routes.delete("/produtos/:id", ProdutoController.excluir);

module.exports = routes;