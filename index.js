const http = require('http');
const fs = require('fs');
const path = require('path');
const { extname } = require('path');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, contentt) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(contentt);
    //     });
    // }

    // if (req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, contentt) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(contentt);
    //     });
    // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bill', age: 20 },
    //         { name: 'Billy', age: 30 },
    //         { name: 'Jack', age: 40 }
    //     ];

    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users));
    // }

    // Dynamic build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.json': contentType = 'application/json'; break;
        case '.png': contentType = 'image/png'; break;
        case '.jpg': contentType = 'image/jpg'; break;
    }
    fs.readFile(filePath, (err, content) => {
        console.log("### : ", filePath)
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(content, 'utf8');
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error : ${err.code}`)
            }
        } else {
            //succes
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf8');
        }
    })
    
});
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`-- server running on port ${PORT}`));

