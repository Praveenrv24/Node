console.log('starting notes.js');

var addNote = (title,body) => {
    debugger;
    console.log("Adding Notes", title,body);
}

var getAll = () => {
    console.log("Getting all notes");
}

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
