const Atendimento = require('../models').Atendimento;

exports.index = (req, res) => {
    res.send('Você está na rota de atendimentos está realizando um GET');
};

exports.store = (req, res) => {
    Atendimento.create({
        cliente: req.body.cliente,
        pet: req.body.pet,
        servico: req.body.servico,
        status: req.body.status,
        observacoes: req.body.observacoes
    });

    res.status(201).send('');
};