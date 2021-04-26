const path = require('path');

// Base filename
console.log("#Base filename " + path.basename(__filename));

//directory name
console.log("#Directory Name " + path.dirname(__filename));

//File extension
console.log("#File Extension " + path.extname(__filename));

//Create Path object
console.log("#Path object " + path.parse(__filename).base);

// Concat 2 paths
console.log("#Concat by join : " + path.join(__dirname, "test", 'index.php'))
