const express = require('express');
const router =  express.Router();
const athleticgen = require('../../apigen/tennis/tennis_athleticgen')

router.get('/', (req, res) => {

    athleticgen()
        .then((article) => {
            res.render('tennis_athletic', { article })
        }).catch((err) => {
            res.render('tennis_athletic', { msg: 'No Headlines Found'});
        });    
})

module.exports = router