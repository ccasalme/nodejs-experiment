// // // // // //JS experiment

// // // // // function sayHello(name){
// // // // //     console.log("Hello " + name);
// // // // // }
// // // // // //sayHello("cyrl");

// // // // // // console.log(window);

// // // // console.log(); //global object
// // // // setTimeout(); //global object
// // // // clearTimeout(); //global object

// // // // window.console.log(); //global object
// // // // var message = ''; //global object
// // // // // however, functions that are defined in var message = ''; are not global objects
// // // // global.console.log(); //global object

// // // //console.log(module);

// // // const logger = require('./logger');
// // // // console.log(logger);
// // // logger.log('message');

// // // instead of exporting an object from a module, we can export a single function

// // // require('path');

// // // const pathObj = path.parse(__filename);
// // // console.log(pathObj);

// // const os = require('node:os');

// // const totalMemory = os.totalmem();
// // const freeMemory = os.freemem();
// // // console.log('Total Memory: ' + totalMemory);
// // console.log(`Total Memory: ${totalMemory}`);
// // console.log(`Free Memory: ${freeMemory}`);

// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

// fs.readdir('./', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// // const EventEmitter = require('events');