const express = require('express');
const router =  express.Router();
const skygen = require('../../apigen/basketball/b_skygen')

router.get('/', (req, res) => {

    skygen()
        .then((article) => {
            res.render('basket_sky', { article })
        }).catch((err) => {
            res.render('basket_sky', { msg: 'No Headlines Found'});
        });    
})

module.exports = router