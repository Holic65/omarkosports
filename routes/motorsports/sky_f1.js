const express = require('express');
const router =  express.Router();
const skygen = require('../../apigen/motorsport/f1_skygen')

router.get('/', (req, res) => {

    skygen()
        .then((article) => {
            res.render('f1_sky', { article })
        }).catch((err) => {
            res.render('f1_sky', { msg: 'No Headlines Found'});
        });   
})

module.exports = router