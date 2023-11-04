const express = require('express');
const router =  express.Router();
const skygen = require('../../apigen/tennis/tennis_skygen')

router.get('/', (req, res) => {

    skygen()
        .then((article) => {
            res.render('tennis_sky', { article })
        }).catch((err) => {
            res.render('tennis_sky', { msg: 'No Headlines Found'});
        });    
})

module.exports = router