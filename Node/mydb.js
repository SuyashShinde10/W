var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    
})

con.connect(function(err){
    if (err) {throw err};
    console.log('connected');
    sql1='create database Com_emp';
    con.query(sql1,function(err,result){
        if (err) {throw err};
        console.log('Database created');
    });
});
