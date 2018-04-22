var http = require('http');
var porta = 3000;
var ip = 'localhost';

var server = http.createServer(function(request, response) {

    if(request.url  == '/produtos') {
        response.end('<html><body><h1>listando os produtos da loja</h1></body></html>');
    } else {
        response.end('<html><body><h1>Home da casa do codigo</h1></body></html>')
    }

}).listen(porta, ip);

console.log('Servidor rodando em http://' + ip + ':' + porta + '/');
