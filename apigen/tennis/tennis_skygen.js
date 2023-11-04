const axios = require('axios');
const cheerio = require('cheerio');

function tennis_skygen() {
    return new Promise((resolve, reject) => {
        const article = [];

        axios.get('https://www.skysports.com/tennis')
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            $('a', html).each(function () {
                const title = $(this).text();
                let url = $(this).attr('href');
                url = url.trim()
                
                if (url.substring(0, 7) == '/tennis' && title.length > 20 && url.length > 20) {
                    url = 'https://www.skysports.com' + url
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



module.exports = tennis_skygen;