const axios = require('axios');
const cheerio = require('cheerio');

function b_skygen() {
    return new Promise((resolve, reject) => {
        const article = [];
        // .grid__col site-layout-secondary__col1

        axios.get('https://www.skysports.com/nba')
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            $('a > span', html).each(function () {
                const title = $(this).text();
                const url = $(this).attr('href');
                if (title.length > 50 && !title.includes('<')) {
                    article.push({
                        title,
                        url
                    })
                }
            });
            resolve(article);
        })
        .catch((err) => {
            reject(err);
        });
    });
}



module.exports = b_skygen;