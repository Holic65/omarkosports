const express = require('express');
const router =  express.Router();
const athleticgen = require('../../apigen/tennis/tennis_telegraphgen')

router.get('/', (req, res) => {

    athleticgen()
        .then((article) => {
            res.render('tennis_telegraph', { article })
        }).catch((err) => {
            res.render('tennis_telegraph', { msg: 'No Headlines Found'});
        });    
})

module.exports = router