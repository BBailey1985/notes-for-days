const { Router } = require("express");
const { notes } = require('../../db/')

router.get('/notes', (req, res) => {
  let results = notes
})