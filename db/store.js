const util = require("util");
const fs = require("fs");
// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require("uuid");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
      read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then(notes => {
        let parsedNotes;

        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
            parsedNotes = [];
        }
        return parsedNotes;
    })
  }
  addNote(newNote) {
    return this.read().then(notes => {
        // let parsedNotes = [].concat(JSON.parse(notes));
        let parsedNotes = JSON.parse(notes);
        console.log(parsedNotes);
        
        return this.addNote()
        .then( notes => [...notes, newNote])
        .then(newNotes => this.write(newNotes))
        .then(() => newNote);
        
    });

        
    

    // set up variables with our notes data here
    // Error handle here, if we have no title or text added throw a new error explaining what is wrong
    
//     const { title,text } = note;
//     console.log(note);

//     const newNote = { title, text, id: uuidv1() };
    
//     if (!title || !text) {
//       throw new Error("Note 'title' and 'text' cannot be blank");
//     }
//     return this.getNotes() 
//     .then(notes => {
//         notes.join(note, newNote)
//     });
//     // Add a unique id to the note using uuid package
//     // Get all notes, add the new note, write all the updated notes, return the newNote
};
  removeNote(id) {

    return this.getNotes()

    .then(notes => notes.filter(note => note.id !== parseInt(id)))

    .then(remainingNotes => this.write(remainingNotes))

  }
}

module.exports = new Store();