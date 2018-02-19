console.log('starting notes.js');

var addNote = (title,body) => {
    console.log("Adding Notes", title,body);
}

//exporting function
module.exports = {
    addNote
}

/* Another way of writting exports

module.exports = {
    addNote : addNote
}

*/
