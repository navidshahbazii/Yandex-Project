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
<<<<<<< HEAD
=======
    //Configuration for the scrape_job
//This module uses the se-scraper to perform the yandex scraping
exports.yscrape = async function (searchInput, ru) {
>>>>>>> 1618c0d89f1cbc0530dec79d87526deacaf4e635
    let scrape_job = {
        search_engine: 'yandex',
        keywords: [searchInput],
          num_pages: 1,
    yandex_settings: {
<<<<<<< HEAD
      yandex_domain: 'yandex.by'
=======
      yandex_domain: searchDomain
>>>>>>> 1618c0d89f1cbc0530dec79d87526deacaf4e635
    },
      };

    var results = await se_scraper.scrape({}, scrape_job);

    //checks if the download option has been check off. If so calls the download function.
    if(Boolean(downloadCheck)){
      try{
<<<<<<< HEAD
        dow.downloadCsv(results, searchInput);
=======
        dow.downloadJSON(results, searchInput);
>>>>>>> 1618c0d89f1cbc0530dec79d87526deacaf4e635
      }
      catch(error){
        console.log(error);
      }

    }

    console.dir(results, {depth: null, colors: true});
<<<<<<< HEAD
    // console.log(searchDomain);
=======
    console.dir(results, {depth: null, colors: true});
    console.log(ru)
>>>>>>> 1618c0d89f1cbc0530dec79d87526deacaf4e635
}
