const util = require("util");
const fs = require("fs");
// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require("uuid");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    constructor() {
        this.lastId = 0;
    }

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

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
        throw new Error("Title and text cannot be blank!");
    }

    const nextNote = { title, text, id: ++this.lastId };

    return this.getNotes()
    .then(notes => [...notes, nextNote])
    .then(updatedNotes => this.write(updatedNotes))
    .then(() => nextNote);

        
};

  removeNote(id) {

    return this.getNotes()

    .then(notes => notes.filter(note => note.id !== parseInt(id)))

    .then(filterNotes => this.write(filterNotes));

  }
}

module.exports = new Store();