const tennis_athleticgen = require('./tennis_athleticgen')
const tennis_skygen = require('./tennis_skygen');
const tennis_telegraphgen = require('./tennis_telegraphgen');


function f1gen() {
    return new Promise((resolve, reject) => {
        let allarticle = {
            athleticarticle: [],
            skyarticle: [],
            telegrapharticle: []
        };

        tennis_athleticgen()
            .then((article) => {
                allarticle.athleticarticle.push(...article);
                return tennis_skygen();
            })
            .then((article) => {
                allarticle.skyarticle.push(...article);
                return tennis_telegraphgen()
            })
            .then((article) =>{
                allarticle.telegrapharticle.push(...article);
                resolve(allarticle);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

module.exports = f1gen