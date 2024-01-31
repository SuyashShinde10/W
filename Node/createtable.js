var mysql=require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database : 'employee'
});

con.connect(function(err){
    if(err){throw err;}
    console.log('Connected');
    sql='CREATE TABLE empifo(id int(10),fname varchar(20),lname varchar(20),rollno int(10)'
    con.query(sql,function(err){
        if(err){throw err;}
        console.log('Table Created')
    })

})