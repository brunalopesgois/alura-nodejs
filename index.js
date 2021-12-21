const customExpress = require('./config/customExpress');
const conn = require('./infra/conn');

conn.connect(e => {
    if (e) {
        console.log(e);
        process.exit(1);
    }

    const app = customExpress();
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});