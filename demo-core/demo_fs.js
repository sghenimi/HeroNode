const fs = require("fs");
const path = require("path");

// new folder with mkdir
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;
//     console.log("... Folder created!");
// });

// // create and write a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'HeroNode tutorial', err => {
//     if (err) throw err;
//     console.log("... file written to!");
//     // write a text to append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nHi, I love Node.js!', err => {
//         if (err) throw err;
//         console.log("... text appended!");
//     })    
// });

// read a file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloNode.txt'), (err, data) => {
    if (err) throw err;
    console.log('File renamed!');
});
