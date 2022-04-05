const res = require("express/lib/response");
const Receita = require("../models/Receita");
let mensagem = "";

const getAll = async (req, res) => {
  try {
    const receita = await Receita.findAll();
    res.render("index", { receita, mensagem });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const cadastro = (req, res) => {
  try {
      res.render("cadastro");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
  cadastro
};
