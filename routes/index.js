const atendimentosController = require('../controllers/atendimentosController');

module.exports = app => {
    app.get(
        '/atendimentos',
        atendimentosController.index
    );

    app.get(
        '/atendimentos/:id',
        atendimentosController.show
    );

    app.post(
        '/atendimentos',
        atendimentosController.store
    );
}