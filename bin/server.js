'use strict'

const http = require('http')
const app = require('../src/app')
const port = searchPort(process.env.PORT || '3000')
const server = http.createServer(app)

server.listen(port)
//server.on('error', )
//server.on('listening', )
console.log(`Api executada na porta: ${port}`)
//console.log("Api executada na porta: " + port)

function searchPort(val)
{
    const port = parseInt(val);

    if(isNaN(port))
        return val; 

    if(port >= 0)
        return port; 

    return;
}





