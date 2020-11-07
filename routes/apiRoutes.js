const router = require("express").Router()
const store = require("../db/db.json")


router.get("/notes", (req, res) => {
    // store.getNotes().then(notes) => {
    //     res.json(notes)
    // }
    // this is the GET route where your will you 
    // will utilize the getNotes() function
})

router.post("/notes/:id", (req, res) => {
    // this is the POST route where your will you 
    // will utilize the addNotes() function
})

router.delete("/notes/:id", (req, res) => {
    // this is the delete route where you will
    // utilize the removeNote() function
})

