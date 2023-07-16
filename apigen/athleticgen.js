const axios = require('axios');
const cheerio = require('cheerio');


function athleticgen() {
    return new Promise((resolve, reject) => {
        const article = [];

        axios.get('https://theathletic.com/football/team/arsenal/')
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            $('a:contains("Arsenal")', html).each(function () {
                const title = $(this).find('p').text();
                const url = $(this).attr('href');
                article.push({
                    title,
                    url
                });
            });

            resolve(article);
        })
        .catch((err) => {
            reject(err);
        });
    });
}



module.exports = athleticgen;