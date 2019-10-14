const port = process.env.PORT || '8000';
const server = require('./server.js');

server.listen(port, console.log(`*** Server listening on port ${port} ***`))