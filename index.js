const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, contentt) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(contentt);
        });
    }

    if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, contentt) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(contentt);
        });
    }

    if (req.url === '/api/users') {
        const users = [
            { name: 'Bill', age: 20 },
            { name: 'Billy', age: 30 },
            { name: 'Jack', age: 40 }
        ];

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users));
    }
    
});
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`-- server running on port ${PORT}`));
