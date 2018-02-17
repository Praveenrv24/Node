console.log('starting the app');

//require exsisting operations
const fs = require('fs');
const os = require('os');

//require extenal file
const notes = require('./notes.js'); 

var user = os.userInfo();
var res = notes.addNote();
console.log(res);

//calling add funtion
console.log("Result:",notes.add(9,-3));

fs.appendFile('Greetings.txt',`Hello ${user.username}!. You are ${notes.age}.`);
