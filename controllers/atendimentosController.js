exports.index = (req, res) => {
    res.send('Você está na rota de atendimentos está realizando um GET');
};

exports.store = (req, res) => {
    console.log(req.body);
    res.send('Você está na rota de atendimentos está realizando um POST');
};