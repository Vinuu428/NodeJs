 var emitter= require("events").EventeEmitter;
 var event=new emitter();

 event.on("Drive",function(data){


console.log(data)

 })

 event.emit("Drive","I am Driving")