console.log('starting the app');

//require exsisting operations
const fs = require('fs');
const os = require('os');

var user = os.userInfo();


//require extenal file
const notes = require('./notes.js'); 
var res = notes.addNote();
console.log(res);
fs.appendFile('Greetings.txt',`Hello ${user.username}!. You are ${notes.age}.`);

//calling add funtion
console.log("Result:",notes.add(9,-3));


