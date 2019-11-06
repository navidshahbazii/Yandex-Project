const se_scraper = require('se-scraper');
const dow = require('./download')

/*This module uses the se-scraper to perform the yandex scraping
@author Elora
Params:
 - searchInput: the search term
 - searchDomain: the subdomain where the search will be performed, default is yandex.
 - downloadCheck: true if Download option has been ticked off
*/
exports.yscrape = async function (searchInput, searchDomain, downloadCheck) {
    let scrape_job = {
        search_engine: 'yandex',
        keywords: [searchInput],
          num_pages: 1,
    yandex_settings: {
      yandex_domain: searchDomain
    },
      };

    var results = await se_scraper.scrape({}, scrape_job);

    //checks if the download option has been check off. If so calls the download function.
    if(Boolean(downloadCheck)){
      try{
        dow.downloadCsv(results, searchInput);
      }
      catch(error){
        console.log(error);
      }

    }

    console.dir(results, {depth: null, colors: true});
}
