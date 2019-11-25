var fs = require('fs');
const wChecker = require('./websiteChecker');
const hostCountry = require('./getHostCountry');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Get current month and year to make new .csv file every month
var today = new Date();
var monthYear = today.getFullYear()+'-'+(today.getMonth()+1);

// Configuration for the csv-writer. Path should be decided on before we make the tool available.
const csvWriter = createCsvWriter({
    path: './'+monthYear+'.csv',
    header: [
        {id: 'searchEngine', title: 'search_engine'},
        {id: 'searchTerm', title: 'search_term'},
        {id: 'vLink', title: 'link'},
        {id: 'title', title: 'title'},
        {id: 'snippet', title: 'snippet'},
        {id: 'rank', title: 'rank'},
        {id: 'siteLocation', title: 'site_location'},
        {id: 'siteType', title: 'site_type'},
        {id: 'timestamp', title: 'datetime'}
    ],
    // If the .csv file for the current month already exists we will append the results.
    // Otherwise we will write the headers for the new file.
    append: (() => {
    if (fs.existsSync('./'+monthYear+'.csv')) {
      return true;
    } else {
      return false;
    }
   })()
});


/*This module downloads the results of the scraping as a .csv file
@author Elora
Params:
 - results: the search results
 - searchInput: the search term that has been used. Necessary to access results in object.
 - searchDomain: Google or Yandex Subdomain
*/
exports.downloadCsv = async function (results, searchInput, searchDomain){
  // Create a timestamp for identification
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+'_'+time;

    //accesses the results and create empty array for the csvfile
    let obj = results.results[searchInput]['1'];
    let csvResults =[];

    //Calls function that cross checks result domains with given dictionary. Return results for all as array. This is why we need a counter variable to access the type per result.
    let websiteTypes = wChecker.websiteChecker(results, searchInput);
    var i = 0;

    //loops through every result and pushes it to the csvResults array
    for (let res of obj.results) {
      //calls the function getHostCountry and passes it the result link.
      const ipOrigin = await hostCountry.getHostCountry(res.link);

      csvResults.push({searchEngine: searchDomain, searchTerm: searchInput,  vLink: res.visible_link, title: res.title, snippet: res.snippet, rank: res.rank, siteLocation: ipOrigin, siteType: websiteTypes[i], timestamp: dateTime});
      i++;
    }

    //Use the csvWriter to write results and download it
    csvWriter.writeRecords(csvResults)       // returns a promise
        .then(() => {
            console.log('...Done');
        });

}
