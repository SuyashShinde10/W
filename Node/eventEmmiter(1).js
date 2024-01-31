var events=require('events');
var  eventEmitter = new events.EventEmitter();

var myEventHandler =  function ()
{
    console.log("MCA is two years course");
}
eventEmitter.on('show',myEventHandler);
eventEmitter.emit('show');