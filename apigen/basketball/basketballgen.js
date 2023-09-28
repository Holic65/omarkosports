const b_athleticgen = require('./b_athleticgen')
const b_skygen = require('./b_skygen');
const b_telegraphgen = require('./b_telegraph');


function basketballgen() {
    return new Promise((resolve, reject) => {
        let allarticle = {
            athleticarticle: [],
            skyarticle: [],
            telegrapharticle: []
        };

        b_athleticgen()
            .then((article) => {
                allarticle.athleticarticle.push(...article);
                return b_skygen();
            })
            .then((article) => {
                allarticle.skyarticle.push(...article);
                return b_telegraphgen()
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

module.exports = basketballgen