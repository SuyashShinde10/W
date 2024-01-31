var events=require('events');
var  eventEmitter = new events.EventEmitter();

var eh1 =  function ()
{
    console.log("Bulb is ON");
}
eventEmitter.on('on',eh1);


var eh2 =  function ()
{
    console.log("Bulb is OFF");
}
eventEmitter.on('off',eh2);
eventEmitter.emit('on');
eventEmitter.emit('off');