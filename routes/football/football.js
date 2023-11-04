const express = require('express');
const router =  express.Router();
const homegen = require('../../apigen/football/homegen')

router.get('/', (req, res) => {

    homegen()
        .then((article) => {
            const athletic = article.athleticarticle.slice(0, 5)
            const sky = article.skyarticle.slice(0, 6)
            const telegraph = article.telegrapharticle.slice(0, 5)
            res.render('football', { athletic: athletic, sky: sky, telegraph: telegraph})
        }).catch((err) => {
            res.render('football', { data: 'No Headlines Found'});
        });    
})

module.exports = router;