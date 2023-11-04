const express = require('express');
const router =  express.Router();
const basketballgen = require('../../apigen/basketball/basketballgen')

router.get('/', (req, res) => {

    basketballgen()
        .then((article) => {
            const athletic = article.athleticarticle.slice(0, 5)
            const sky = article.skyarticle.slice(0, 5)
            const telegraph = article.telegrapharticle.slice(0, 5)
            res.render('basketball', { athletic: athletic, sky: sky, telegraph: telegraph})
        }).catch((err) => {
            res.render('basketball', { data: 'No Headlines Found'});
        });    
})

module.exports = router;