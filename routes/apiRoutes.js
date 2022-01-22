const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { notes } = require('../db/notes.json')



//reading notes.json file 
router.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, notes));
})

// post api
router.post('/notes', (req, res) => {
  console.log(req.body);
  // res.sendFile(path.join(__dirname, notes));
})

module.exports = router;