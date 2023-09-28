const express = require('express');
const router =  express.Router();
const athleticgen = require('../../apigen/motorsport/f1_skygen')

router.get('/', (req, res) => {

    athleticgen()
        .then((article) => {
            res.render('f1_sky', { article })
        }).catch((err) => {
            res.render('f1_sky', { msg: 'No Headlines Found'});
        });   
})

module.exports = router