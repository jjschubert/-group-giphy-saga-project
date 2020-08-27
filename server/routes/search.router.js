const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/:query', (req, res) => {
    console.log(req.params.query);
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.query}&api_key=${process.env.GIPHY_KEY}`)
    .then(response => {
        res.send(response.data)
    }).catch(error => {
        res.sendStatus(500);
    })
})


module.exports = router;