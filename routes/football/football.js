const express = require('express');
const router =  express.Router();
const homegen = require('../../apigen/football/homegen')

router.get('/', (req, res) => {

    homegen()
        .then((article) => {
            const athletic = article.athleticarticle.slice(0, 4)
            const sky = article.skyarticle.slice(0, 4)
            const telegraph = article.telegrapharticle.slice(0, 4)
            res.render('home', { athletic: athletic, sky: sky, telegraph: telegraph})
        }).catch((err) => {
            res.render('home', { data: 'No Headlines Found'});
        });    
})

module.exports = router;