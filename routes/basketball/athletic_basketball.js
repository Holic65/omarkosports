const express = require('express');
const router =  express.Router();
const athleticgen = require('../../apigen/basketball/b_athleticgen')

router.get('/', (req, res) => {

    athleticgen()
        .then((article) => {
            res.render('basket_athletic', { article })
        }).catch((err) => {
            res.render('basket_athletic', { msg: 'No Headlines Found'});
        });    
})

module.exports = router