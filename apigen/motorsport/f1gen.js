const f1athleticgen = require('./f1_athleticgen')
const f1skygen = require('./f1_skygen');
const f1telegraphgen = require('./f1_telegraphgen');


function f1gen() {
    return new Promise((resolve, reject) => {
        let allarticle = {
            athleticarticle: [],
            skyarticle: [],
            telegrapharticle: []
        };

        f1athleticgen()
            .then((article) => {
                allarticle.athleticarticle.push(...article);
                return f1skygen();
            })
            .then((article) => {
                allarticle.skyarticle.push(...article);
                return f1telegraphgen()
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