const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT "category".name, "favorites".id, "favorites".category_id, "favorites".image_path FROM "category" 
  JOIN "favorites" ON "category".id = "favorites".category_id
  ORDER BY "favorites".id ASC;`
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
  console.log('body:', req.body, 'params', req.params.favId);
  const gifId = req.body.id;
  const favId = req.body.category;
  const queryText = `UPDATE favorites 
                    SET "category_id" = $1
                    WHERE id = $2;`
  pool.query(queryText, [favId, gifId])
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
