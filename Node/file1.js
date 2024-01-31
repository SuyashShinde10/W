var http=require('http');
const fs=require('fs');
txt = "MCA is PG Degree ";
fs.writeFile('first1.txt',txt,function(err){
    if(err){throw err;}
})
 fs.readFile('first1.txt','utf-8',function(err,html)
 {
    if (err){throw err;}
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(html);
        res.end();
    }).listen(8089)
});
 
     
 








