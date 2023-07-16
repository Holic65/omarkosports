const axios = require('axios');
const cheerio = require('cheerio');

function skygen() {
    return new Promise((resolve, reject) => {
        const article = [];

        axios.get('https://www.skysports.com/football')
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            $('a:contains("Arsenal")', html).each(function () {
                const title = $(this).text();
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



module.exports = skygen;