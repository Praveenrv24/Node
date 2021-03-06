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


//require thrid party packges(npm Packages)
const _ = require('lodash');

console.log(_.isString('Pravi'));
console.log(_.isString(true));

var arrayFiltered = _.uniq(['Lalu','Pravi','Paru','Lalu',1,2]);
console.log(arrayFiltered);

/*
command for running nodemon             : ***** nodemon app.js *****  This should install globally

command for generting package.json file : ***** npm init *****
*/