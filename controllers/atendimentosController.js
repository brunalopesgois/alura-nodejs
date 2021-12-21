const Atendimento = require('../models').Atendimento;
const controller = {};

controller.index = (req, res) => {
    Atendimento.findAll()
        .then(atendimentos => res.json(atendimentos));
};

controller.store = (req, res) => {
    Atendimento.create({
        cliente: req.body.cliente,
        pet: req.body.pet,
        servico: req.body.servico,
        status: req.body.status,
        observacoes: req.body.observacoes
    })
    .then(() => res.status(201).send(''))
    .catch(e => console.log(e));
};

module.exports = controller;