const se_scraper = require('se-scraper');
var dow = require('./download');

//Short example code given to run a basic search_engine
//// TODO:Rewrite so I can pass the scrape_job config to the function form the GUI
(async () => {
    let scrape_job = {
        search_engine: 'yandex',
        keywords: ['beatles'],
        num_pages: 1,
    };

    var results = await se_scraper.scrape({}, scrape_job);

    console.dir(results, {depth: null, colors: true});

    dow.downloadJSON(results);

})();
