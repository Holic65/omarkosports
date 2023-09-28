const axios = require('axios');
const cheerio = require('cheerio');


function b_athleticgen() {
    return new Promise((resolve, reject) => {
        const article = [];

        axios.get('https://theathletic.com/nba/')
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            $('a', html).each(function () {
                const title = $(this).find('p').text();
                const url = $(this).attr('href');
                if (title.length > 50) {
                    article.push({
                        title,
                        url
                    });
                }
            });

            resolve(article);
        })
        .catch((err) => {
            reject(err);
        });
    });
}


module.exports = b_athleticgen;