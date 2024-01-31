var mysql=require('mysql');
var con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'Com_emp'
});

con.connect(function(err){
    if (err){throw err};
    console.log('Database connected');
    sql2='create table Employee( EmpID int primary key,  EmpName varchar(50),  DeptId int, salary int)';
    con.query(sql2,function(err,result){
        if (err){throw err};
        console.log('Table Created');

    })
})