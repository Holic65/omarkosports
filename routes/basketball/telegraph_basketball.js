const express = require('express');
const router =  express.Router();
const telegraphgen = require('../../apigen/basketball/b_telegraph')

router.get('/', (req, res) => {

    telegraphgen()
        .then((article) => {
            res.render('basket_telegraph', { article })
        }).catch((err) => {
            res.render('basket_telegraph', { msg: 'No Headlines Found'});
        });    
})

module.exports = router