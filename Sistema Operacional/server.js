const http = require('http');
const host = 'http://localhost/';
const port = '5000';
const stats = require('./pcRamUsed');
 

http.createServer((require, res) =>{

    let url = require.url;
    if(url == "/stats"){
        res.end(JSON.stringify(stats, null, 2));
    }else{
        res.end("<h1>Deu erro!</h1>");
    }
})
.listen(port, () => console.log(`Server in running in ${host}:${port}, ${stats} `));