let http = require('http');
let server = http.createServer(handleRequest);
let fs = require('fs');
const PORT = 5858;

function handleRequest(req, res) {
    fs.createReadStream('./file.js').on('data', function(chunk) {
        res.write(chunk);
        res.end();
    })
}
server.listen(PORT);