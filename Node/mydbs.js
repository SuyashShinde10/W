var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Com_emp'
});

con.connect(function(err){
    if (err){throw err};
    console.log('Database Connected');
    sql4='select * from employee were EmpID=5';
    con.query(sql4,function(err,result){
        if (err){throw err};
        console.log('Values');
    })
})