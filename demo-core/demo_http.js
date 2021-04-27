const http = require('http');

// create server object
http.createServer(function (req, res) {
    //res.writeHead(200);
    res.write("Hello Http Server")
    res.end()
}).listen(5000, ()=> console.log('... Server running!'))