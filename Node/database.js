
var mysql=require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'student4'
});

con.connect(function(err){
    if(err){throw err;}
    console.log('Connected');
    con.query('select * from studentinfo',function(err,result){
        if(err){throw err;}
        console.log(result);
    })
})