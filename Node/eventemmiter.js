var events= require('events');
var em = new events.EventEmitter();
var eh1=function(){
    console.log("Bulb is on");
}

var eh2=function(){
    console.log("Bulb is off");
}

em.on('on',eh1);
em.on('off',eh2);

em.emit('on');
em.emit('off');
