const fs = require('fs');


var obj = {
    title : 'Node js',
    body  : 'The complete Node tutorial'
}

var jsonObj = JSON.stringify(obj);// converting obj to json string

console.log(typeof jsonObj);

fs.writeFileSync('notes.json',jsonObj); //writting json to jsonfile

var readJson = fs.readFileSync('notes.json'); // reading json file 

var stringObj = JSON.parse(readJson); //converting string to obj 


console.log(typeof stringObj);
console.log(stringObj.title,stringObj.body);