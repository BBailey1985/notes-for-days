const router = require('express').Router();
const uuid = require('../helpers/uuid')
const fs = require('fs');
const path = require('path');
const savedNotes = JSON.parse(fs.readFileSync('./db/notes.json', 'utf8'));

//reading notes.json file 
router.get('/notes', (req, res) => {
  res.json(savedNotes)
})

// 
router.get('/notes/:id', (req, res) => {
  res.json(savedNotes[req.params.id]);
})

// post api
router.post('/notes', (req, res) => {
  let newNote = req.body;
  let noteId = (savedNotes.length, uuid());
  newNote.id = noteId;
  savedNotes.push(newNote);

  fs.writeFileSync('./db/notes.json', JSON.stringify(savedNotes));
  console.log(newNote)
  res.json(savedNotes);
})



module.exports = router;