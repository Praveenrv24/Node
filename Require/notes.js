console.log('starting notes.js');

//exporting age variable
module.exports.age = 25;

//exporting function
module.exports.addNote = () =>{
    console.log('call addnote');
    return 'New note';
}

//sample add function
module.exports.add = (a,b) => {
    return a + b;
}