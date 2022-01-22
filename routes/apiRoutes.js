const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { notes } = require('../db/notes.json')




//reading notes.json file 
router.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, notes));
})

router.get('/api/notes/:id', (req, res) => {
  let storedNote = JSON.parse(fs.readFileSync(notes, 'utf8')); 
  res.json(storedNote[Number(req.params.id)]);
})

// post api
router.post('/api/notes', (req, res) => {
  let storedNote = JSON.parse(fs.readFileSync(notes, 'utf8')); 
  let newNote = req.body;
  let noteId = (storedNote.length).toString();
  newNote = noteId;
  storedNote.push(newNote);

  fs.writeFileSync(notes, JSON.stringify(storedNote));
  console.log(newNote)
  res.json(storedNote);
})

module.exports = router;