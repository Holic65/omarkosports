const axios = require('axios');
const cheerio = require('cheerio');

function f1_telegraphgen() {
    return new Promise((resolve, reject) => {
        const article = [];

        axios.get('https://www.telegraph.co.uk/formula-1/')
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            let i = 0
            $('#main-content a', html).each(function () {
                const title = $(this).text();
                let url = $(this).attr('href');

                url = url.trim()

                if (url.substring(0, 10) == '/formula-1' && title.length > 10) {
                    url = 'https://www.telegraph.co.uk' + url
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



module.exports = f1_telegraphgen;