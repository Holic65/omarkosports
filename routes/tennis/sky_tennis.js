const express = require('express');
const router =  express.Router();
const athleticgen = require('../../apigen/tennis/tennis_skygen')

router.get('/', (req, res) => {

    athleticgen()
        .then((article) => {
            res.render('tennis_sky', { article })
        }).catch((err) => {
            res.render('tennis_sky', { msg: 'No Headlines Found'});
        });    
})

module.exports = router