var dbConnection = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        var connection = dbConnection();

        connection.query('select * from produtos', function(erros, resultados) {
            res.render('produtos/lista', { lista: resultados });
        });

        connection.end();
    });
}
