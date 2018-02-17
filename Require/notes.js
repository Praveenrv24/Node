console.log('starting notes.js');

//exporting age variable
module.exports.age = 25;

//exporting function

module.exports.addNote = () =>{
    console.log('call addnote');
    return 'New note';
}