const fs = require('fs');
txt = "MCA is PG Degree.";
txt2 = "MCA is 2 years course.";

fs.writeFile('first.txt',txt,function(err){
        if(err){throw err;}
})
fs.readFile('first.txt','utf-8',function(err,data){
    if(err){throw err;}
    console.log(data);
})
fs.appendFile('first.txt',txt2,function(err){
    if(err){throw err;}
     
})








