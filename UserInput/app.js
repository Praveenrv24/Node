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
console.log("Yargs: ", yargs.argv);
var argu = yargs.argv;


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
*/




