let path = require('path');
// 1. console.log(\_\_dirname);
console.log('the pseduo-global __dirname: '+ __dirname);
// 2. console.log(\_\_filename);
console.log('the pseduo-global __filename: ' + __filename);
// 3. use path module to join `__dirname` and `server.js`
console.log("Path.join " + path.join(__dirname, 'server.js'));