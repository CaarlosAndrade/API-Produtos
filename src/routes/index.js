'use strict'

const express = require('express')

const router = new express.Router();

//endpoint 
router.get('/', (req, res, next) => {
    res.status(200).send({
        "nome" :"Carlos Andrade Rocha",
        "rm": "85384"
    });
});

module.exports = router;