const express = require('express');
const router =  express.Router();
const athleticgen = require('../../apigen/basketball/b_skygen')

router.get('/', (req, res) => {

    athleticgen()
        .then((article) => {
            res.render('basket_sky', { article })
        }).catch((err) => {
            res.render('basket_sky', { msg: 'No Headlines Found'});
        });    
})

module.exports = router