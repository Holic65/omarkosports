const express = require('express');
const router =  express.Router();
const telegraphgen = require('../apigen/telegraph')

router.get('/', (req, res) => {
    telegraphgen()
        .then((article) => {
            res.render('telegraph', { article });
        }).catch((err) => {
            res.render('telegraph', { msg: 'No Headline Found'})
        });

})

module.exports = router;