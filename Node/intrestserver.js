var http=require('http');
var ptr=require('./intrestmod');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Amount of intrest is: '+ptr.ptr(500,2,8));
    res.end();
}).listen(8088);