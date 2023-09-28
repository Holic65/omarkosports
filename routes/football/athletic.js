const express = require('express');
const router =  express.Router();
const athleticgen = require('../../apigen/football/athleticgen')

router.get('/', (req, res) => {

    athleticgen()
        .then((article) => {
            res.render('athletic', { article })
        }).catch((err) => {
            res.render('athletic', { msg: 'No Headlines Found'});
        });    
})

module.exports = router