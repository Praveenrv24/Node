//Sample file this can be tested with User Input Folder


console.log('starting notes.js');
const fs = require('fs');

var addNote = (title,body) => {
    var notes = [];
    var note = {
      title,
      body
    };
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
    
    }
    
    var duplicateNotes = notes.filter((note) => note.title === title); // return true and keep the value or false and array will be empty


    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }

};

var getAll = () => {
    console.log("Getting all notes");
};

//exporting function if function name and value is identical
module.exports = {
    addNote,
    getAll
}

/* Another way of writting exports

module.exports = {
    addNote : addNote
}

*/
