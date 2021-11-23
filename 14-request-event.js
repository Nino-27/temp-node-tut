// http exends the eventmitter thats why we can use the (on) and the (emit) function
const http = require('http');
const server = http.createServer();

server.on('request', (req, res)=> {
    console.log('Hay un request');
    res.end(`Welcome, your request is:  ${req.url}`)
})

server.listen(5000, ()=> console.log(`listening on port: 5000`));