const express = require('express');
const router =  express.Router();
const athleticgen = require('../../apigen/motorsport/f1_telegraphgen')

router.get('/', (req, res) => {

    athleticgen()
        .then((article) => {
            res.render('f1_telegraph', { article })
        }).catch((err) => {
            res.render('f1_telegraph', { msg: 'No Headlines Found'});
        });    
})

module.exports = router