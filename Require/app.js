console.log('starting the app');

//require inbuilt packges
const fs = require('fs');
const os = require('os');

//require extenal file
const notes = require('./notes.js'); 

var user = os.userInfo();


fs.appendFile('Greetings.txt',`Hello ${user.username}!. You are ${notes.age}.`);
