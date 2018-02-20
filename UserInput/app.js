console.log('starting the app');

//require exsisting operations
const fs = require('fs');

//require thrid party packges(npm)
const _ = require('lodash'); 
const yargs = require('yargs'); // For parsing/getting the arguments as objects. 

//require extenal file
const notes = require('./notes.js'); 

var usrInp = process.argv[2]; // to get the user input through process.Comment yargs and try to check

console.log("Process :",process.argv);
console.log("Yargs: ", yargs.argv)


var argu = yargs.argv;


//To validate the user input we use command() and show the help details use help()
var argu = yargs
.command('add','Add a new note',{   
   title : {
       describe : 'Title of the note', // To show the details for title field
       demand   : true,                // To assign this is mandatory field
       alias    : 't'                  // Short cut for inputing the fields
   },
   body  : {
    describe : 'Body of the note',
    demand   : true,
    alias    : 'b'
  }
})
.help()
.argv;

var usrInp = argu._[0]; //Alternate method for getting the user input using yargs . Comment process and try to check

console.log('Command', usrInp); //printing input


if (usrInp === 'add') {
  notes.addNote(argu.title,argu.body);
} else if (usrInp === 'list') {
    notes.getAll();
} else if (usrInp === 'read') {
    console.log('Reading');
} else if (usrInp === 'remove') {
    console.log('Removing');
} else {
  console.log('Command not recognized');
}

/*
command for passing values : ***** node app.js read(key) --title="test" / --title "test" (value) *****

command to install yargs   : ***** npm install yargs@4.7.1 --save *****

command to run debug mode  : ***** node debug app.js *****  Inbuit dubugger
use 'debugger' where you want to stop in the code 'C' to continue, 'n for executing next line' and 
'repl' to check values

Command for 3rd party debug: ***** npm install -g node-inspector *****
To run debug mode          : ***** node-debug app.js *****

*/




