const express = require('express');
var app=express();
app.get('/Register',function(req,res){
    res.sendFile(__dirname + '/Register.html');

});


app.get('/formsubmit',function(req,res){
    res.send(req.query.name);
});

app.listen(8000);