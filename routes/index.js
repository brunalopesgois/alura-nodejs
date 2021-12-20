const atendimentosController = require('../controllers/atendimentosController');

module.exports = app => {
    app.get(
        '/atendimentos',
        atendimentosController.index
    );

    app.post(
        '/atendimentos',
        atendimentosController.store
    );
}