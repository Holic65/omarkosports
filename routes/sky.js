const express = require('express');
const router =  express.Router();
const skygen = require('../apigen/skygen')

router.get('/', (req, res) => {
    skygen()
        .then((article) => {
            res.render('sky', { article })
        }).catch((err) => {
            res.render('sky', { msg: 'No Headlines Found'});
        });

})

module.exports = router;