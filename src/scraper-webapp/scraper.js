const se_scraper = require('se-scraper');
const dow = require('./download')

/*This module uses the se-scraper to perform the yandex scraping
@author Elora
Params:
 - searchInput: the search term(s)
 - searchDomain: the subdomain where the search will be performed, default is yandex.
 - downloadCheck: true if Download option has been ticked off
*/
exports.yscrape = async function (searchInput, searchDomain, downloadCheck, googleCheck) {
    searchInput = searchInput.split(',')

    //If the Google checkbox has been ticked off, we will set the scraping configuration for google and scrape it.
    if(Boolean(googleCheck)){
      let scrape_job = {
        search_engine: 'google',
        keywords: searchInput,
        num_pages: 1,
      }
      var results = await se_scraper.scrape({}, scrape_job);
      // If the download checkbox has been ticked off, we will pass the results to the download function along with the domain.
      if(Boolean(downloadCheck)){
        downloadAsCsv(results, searchInput,"google.com");
      }
    }
    // Else we will do it for Yandex.
    else{
      let scrape_job = {
        search_engine: 'yandex',
        keywords: searchInput,
        num_pages: 1,
        yandex_settings: {
          yandex_domain: searchDomain
        }
      }
      var results = await se_scraper.scrape({}, scrape_job);
      if(Boolean(downloadCheck)){
        downloadAsCsv(results, searchInput,String(searchDomain));
      }
    }
    //Prints the results on the console. 
    console.dir(results, {depth: null, colors: true});

}

// Middle function for calling the actual downloadCsv function. We will pass it the searchDomain as well so we can write a header
// to distinguish between Google and Yandex results.
function downloadAsCsv(results, searchInput,searchDomain){
    if(Array.isArray(searchInput)){
      for(let searchTerm of searchInput){
        dow.downloadCsv(results, searchTerm, searchDomain);
      }
    }else{
      dow.downloadCsv(results, searchInput, searchDomain);

}
}
