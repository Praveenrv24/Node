console.log('starting the app');

//require exsisting operations
const fs = require('fs');

//require thrid party packges(npm)
const _ = require('lodash');

//require extenal file
const notes = require('./notes.js'); 

var usrInp = process.argv[2]; // to get the user input
console.log('Command', usrInp);

console.log(process.argv);

if (usrInp === 'add') {
  console.log('Adding');
} else if (usrInp === 'list') {
    console.log('Listing');
} else if (usrInp === 'read') {
    console.log('Reading');
} else if (usrInp === 'remove') {
    console.log('Removing');
} else {
  console.log('Command not recognized');
}







