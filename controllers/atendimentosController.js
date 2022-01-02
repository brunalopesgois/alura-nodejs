const Atendimento = require('../models').Atendimento;
const controller = {};

controller.index = (req, res) => {
    Atendimento.findAll()
        .then(atendimentos => res.json(atendimentos));
};

controller.show = (req, res) => {
    const id = req.params.id;
    Atendimento.findByPk(id)
        .then(atendimento => {
            if (!atendimento) {
                res.status(204).send('');
                return;
            }
            res.json(atendimento);
        })
};

controller.store = (req, res) => {
    Atendimento.create({
        cliente: req.body.cliente,
        pet: req.body.pet,
        servico: req.body.servico,
        status: req.body.status,
        observacoes: req.body.observacoes,
        data_agendamento: req.body.data_agendamento
    })
    .then(() => res.status(201).send(''))
    .catch(e => {
        res.status(500).send(e);
        console.log(e);
    });
};

controller.update = (req, res) => {
    const id = req.params.id;
    Atendimento.findByPk(id)
        .then(atendimento => {
            if (atendimento === null) {
                res.status(404).send({"erro": "Atendimento não existente!"});
                return;
            }

            atendimento.set({
                cliente: req.body.cliente,
                pet: req.body.pet,
                servico: req.body.servico,
                status: req.body.status,
                observacoes: req.body.observacoes,
                data_agendamento: req.body.data_agendamento
            });
            atendimento.save();
            res.json(atendimento);
        })
        .catch(e => {
            console.log(e);
            res.status(500).send(e);
        });
};

controller.destroy = (req, res) => {
    const atendimentoId = req.params.id;
    Atendimento.destroy({
        where: {
            id: atendimentoId
        }
    })
        .then(() => res.status(204).send(''))
        .catch(e => {
            console.log(e);
            res.status(500).send(e);
        });
};

module.exports = controller;