const customExpress = require('./config/customExpress');
const conn = require('./infra/conn');

conn.connect(e => {
    if (e) {
        console.log(e);
    } else {
        console.log('Conexão bem sucedida');
    }

    const app = customExpress();
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});