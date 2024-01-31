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
    sql3="insert into Employee (EmpID,EmpName,DeptId,salary) values ? ";
    var values=[
        [3,'ankit',10,10000],
        [4,'ankit',10,10000],
        [5,'ankit',10,10000],
        [6,'ankit',10,10000],
        [7,'ankit',10,10000]
    ];

    con.query(sql3,[values],function(err,result){
        if (err){throw err};
        console.log('Values Inserted');
    })
})