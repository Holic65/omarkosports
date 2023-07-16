const athleticgen = require('../apigen/athleticgen')
const skygen = require('../apigen/skygen');
const telegraphgen = require('./telegraph');


function homegen() {
    return new Promise((resolve, reject) => {
        let allarticle = {
            athleticarticle: [],
            skyarticle: [],
            telegrapharticle: []
        };

        athleticgen()
            .then((article) => {
                allarticle.athleticarticle.push(...article);
                return skygen();
            })
            .then((article) => {
                allarticle.skyarticle.push(...article);
                return telegraphgen()
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

module.exports = homegen
