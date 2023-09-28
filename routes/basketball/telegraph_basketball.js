const express = require('express');
const router =  express.Router();
const athleticgen = require('../../apigen/basketball/b_telegraph')

router.get('/', (req, res) => {

    athleticgen()
        .then((article) => {
            res.render('basket_telegraph', { article })
        }).catch((err) => {
            res.render('basket_telegraph', { msg: 'No Headlines Found'});
        });    
})

module.exports = router