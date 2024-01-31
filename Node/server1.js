var http=require('http');
var dt=require('./demomod1');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('This is my first node js Server');
    res.write(dt.mydate1());
    res.end();
}).listen(8082);