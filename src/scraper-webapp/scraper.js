const se_scraper = require('se-scraper');
const dow = require('./download')

<<<<<<< HEAD
/*This module uses the se-scraper to perform the yandex scraping
@author Elora
Params:
 - searchInput: the search term
 - searchDomain: the subdomain where the search will be performed, default is yandex.
 - downloadCheck: true if Download option has been ticked off
*/
exports.yscrape = async function (searchInput, searchDomain, downloadCheck) {
    //Configuration for the scrape_job
=======
//This module uses the se-scraper to perform the yandex scraping
exports.yscrape = async function (searchInput, ru) {
>>>>>>> 03fb627fffc85a3b4b4e7c9d5df0eca0d337e9cf
    let scrape_job = {
        search_engine: 'yandex',
        keywords: [searchInput],
          num_pages: 1,
    yandex_settings: {
      yandex_domain: searchDomain
    },
      };

    var results = await se_scraper.scrape({}, scrape_job);

<<<<<<< HEAD
    //checks if the download option has been check off. If so calls the download function.
    if(Boolean(downloadCheck)){
      try{
        dow.downloadJSON(results, searchInput);
      }
      catch(error){
        console.log(error);
      }

    }

    console.dir(results, {depth: null, colors: true});
=======
    console.dir(results, {depth: null, colors: true});
    console.log(ru)
>>>>>>> 03fb627fffc85a3b4b4e7c9d5df0eca0d337e9cf
}
