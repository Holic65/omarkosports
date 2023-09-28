const express = require('express');
const router =  express.Router();
const tennisgen = require('../../apigen/tennis/tennisgen')

router.get('/', (req, res) => {

    tennisgen()
        .then((article) => {
            const athletic = article.athleticarticle.slice(0, 6)
            const sky = article.skyarticle.slice(0, 6)
            const telegraph = article.telegrapharticle.slice(0, 6)
            res.render('tennis', { athletic: athletic, sky: sky, telegraph: telegraph})
        }).catch((err) => {
            res.render('tennis', { data: 'No Headlines Found'});
        });    
})

module.exports = router;