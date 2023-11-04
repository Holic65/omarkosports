const axios = require('axios');
const cheerio = require('cheerio');

function b_telegraphgen() {
    return new Promise((resolve, reject) => {
        const article = [];

        axios.get('https://www.telegraph.co.uk/basketball/')
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            let i = 0
            $('#main-content a', html).each(function () {
                const title = $(this).text();
                let url = $(this).attr('href');
                url = url.trim()
                
                if (url.substring(0, 11) == '/basketball' && title.length > 10) {
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



module.exports = b_telegraphgen;