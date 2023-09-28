const express = require('express');
const router =  express.Router();
const f1gen = require('../../apigen/motorsport/f1gen')

router.get('/', (req, res) => {

    f1gen()
        .then((article) => {
            const athletic = article.athleticarticle.slice(0, 6)
            const sky = article.skyarticle.slice(0, 6)
            const telegraph = article.telegrapharticle.slice(0, 6)
            res.render('f1', { athletic: athletic, sky: sky, telegraph: telegraph})
        }).catch((err) => {
            res.render('f1', { data: 'No Headlines Found'});
        });    
})

module.exports = router;