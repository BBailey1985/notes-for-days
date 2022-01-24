const router = require('express').Router();
const uuid = require('../helpers/uuid')
const fs = require('fs');
const savedNotes = JSON.parse(fs.readFileSync('./db/notes.json', 'utf8'));

//reading notes.json file 
router.get('/notes', (req, res) => {
  res.json(savedNotes)
})

// nget note id
router.get('/notes/:id', (req, res) => {
  res.json(savedNotes[req.params.id]);
})

// post api
router.post('/notes', (req, res) => {
  let newNote = req.body;
  let noteId = (savedNotes.length, uuid());
  newNote.id = noteId;
  savedNotes.push(newNote);
  console.log('Note Saved!');

  fs.writeFileSync('./db/notes.json', JSON.stringify(savedNotes));
  res.json(savedNotes);
})

//delete api
router.delete('/notes/:id', (req, res) => {
  let getNote = savedNotes.find(({ id }) => id === req.params.id);
  savedNotes.splice(savedNotes.indexOf(getNote), 1);

  fs.writeFileSync('./db/notes.json', JSON.stringify(savedNotes));
  res.json(savedNotes);
  console.log('Note Deleted!');
})

module.exports = router;
