var http = require('http');

http.createServer(
    
    function(req, res){
        
        var path = req.url.toLowerCase();
        
        
        switch(path){
            case '':
                res.writeHead(200, {'Content-Type':'text-plain'});
                res.end('Home');
                break;
            case '/about':
                res.writeHead(200, {'Content-Type':'text-plain'})
                res.end('About');
                break;
            default:
                res.writeHead(404, {'Content-Type':'text-plain'})
                res.end('Error Not Found');
                break;
        }
    }
).listen(3000);
console.log("Servidor en el puerto localhost:3000");
console.log("Enrutamiento");