const axios = require('axios');
const cheerio = require('cheerio');

function f1skygen() {
    return new Promise((resolve, reject) => {
        const article = [];
        axios.get('https://www.skysports.com/f1')
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            $('.site-layout-secondary__col1 a', html).each(function () {
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



module.exports = f1skygen;