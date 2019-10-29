const se_scraper = require('se-scraper');

//This module uses the se-scraper to perform the yandex scraping
exports.yscrape = async function (searchInput) {
    let scrape_job = {
        search_engine: 'yandex',
        keywords: [searchInput],
          num_pages: 1,
    yandex_settings: {
      gl:'by'
    },
      };

    var results = await se_scraper.scrape({}, scrape_job);

    console.dir(results, {depth: null, colors: true});

}
