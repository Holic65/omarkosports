const f1_athleticgen = require('./f1_athleticgen')
const f1_skygen = require('./f1_skygen');
const f1_telegraphgen = require('./f1_telegraphgen');


function f1_gen() {
    return new Promise((resolve, reject) => {
        let allarticle = {
            athleticarticle: [],
            skyarticle: [],
            telegrapharticle: []
        };

        f1_athleticgen()
            .then((article) => {
                allarticle.athleticarticle.push(...article);
                return f1_skygen();
            })
            .then((article) => {
                allarticle.skyarticle.push(...article);
                return f1_telegraphgen()
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

module.exports = f1_gen