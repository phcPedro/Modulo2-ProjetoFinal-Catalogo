const res = require("express/lib/response");
const Receita = require("../models/Receita");
let mensagem = "";

const getAll = async (req, res) => {
  try {
    const receita = await Receita.findAll();
    res.render("index", { receita, receitaEd: null, receitaDelete: null });
    
} catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const cadastro = (req, res) => {
  try {
    res.render("cadastro", {receitaEd: null, receitaDelete: null});
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const contatos = (req, res) => {
  try {
    res.render("contatos");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const add = async (req, res) => {
  try {
    const receita = req.body;
    if(!receita){
        return res.redirect('/cadastro');
    }
   
    await Receita.create(receita);
    res.redirect("/");
    
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req,res) => {
    
    try {
       const method = req.params.method;
       const receitas = await Receita.findAll();
       const receita = await Receita.findByPk(req.params.id);
       
       
       if(method == 'put'){
           res.render('index',{
               receitas,
               receitaEd: receita,
               receitaDelete: null,
              
           })
       }else{
          res.render('index',{ 
           receitas,
           receitaEd: null,
           receitaDelete: receita,
          })
       }  
    }catch(err){
        res.status(500).send({err: err.message});
    }
}

const update = (req, res) => {

}
module.exports = {
  getAll,
  cadastro,
  contatos,
  add,
  getById,
  update,
};
