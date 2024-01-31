var http=require('http');
const fs = require('fs');
txt = "New text ";

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    fs.writeFile('new.txt',txt,function(err){
        if(err){throw err;}
})
fs.readFile('new.txt','utf-8',function(err,data){
    if(err){throw err;}
    console.log(data);
})

    res.write('File Created...');
     
    res.end();
}).listen(8089);