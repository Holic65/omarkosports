const axios = require('axios');
const cheerio = require('cheerio');

function b_skygen() {
    return new Promise((resolve, reject) => {
        const article = [];

        axios.get('https://www.skysports.com/nba')
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            $('a', html).each(function () {
                const title = $(this).text();
                let url = $(this).attr('href');
                
                if (url[0] == '/') {
                    url = 'https://www.skysports.com' + url
                }

                if (title.length > 50 && !title.includes('<') && url.length > 30) {
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