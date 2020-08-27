const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites" 
                     RIGHT JOIN "category" 
                    ON "category".id = "favorites".category_id;`
  pool.query(queryText)
  .then((results) => {
    res.send(results.rows)
  }).catch((error) => {
    console.log('error in router get')
    res.sendStatus(500)
  })
});

// add a new favorite 
router.post('/', (req, res) => {
  const newGif = req.body;
  const queryText = `INSERT INTO favorites ("image_path")
                      VALUES ($1);`
  pool.query(queryText, [newGif])
  .then((results) => {
    res.sendStatus(201)
  }).catch((error) => {
    console.log('error in router post')
    res.sendStatus(500)
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const newGif = req.body;
  const favId = req.params.favId
  const queryText = `UPDATE favorites 
                    SET "category_id" = $1
                    WHERE id = $2;`
  pool.query(queryText, [newGif, favId])
  .then((results) => {
    res.sendStatus(201)
  }).catch((error) => {
    console.log('error in router post')
    res.sendStatus(500)
  })
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
