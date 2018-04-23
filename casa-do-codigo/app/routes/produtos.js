module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234qwer',
            database: 'casadocodigo_nodejs'
        });

        connection.query('select * from produtos', function(err, results) {
            res.send(results);
            if(err) {
                console.log(err);
            }
        });

        connection.end();
    });
}
