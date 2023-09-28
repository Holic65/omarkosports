const express = require('express');
const router =  express.Router();
const athleticgen = require('../../apigen/motorsport/f1_athleticgen')

router.get('/', (req, res) => {

    athleticgen()
        .then((article) => {
            res.render('f1_athletic', { article })
        }).catch((err) => {
            res.render('f1_athletic', { msg: 'No Headlines Found'});
        });    
})

module.exports = router