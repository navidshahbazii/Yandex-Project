var fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './test.csv',
    header: [
        {id: 'vLink', title: 'LINK'},
        {id: 'title', title: 'TITLE'},
        {id: 'snippet', title: 'SNIPPET'}
    ]
});

/*This module downloads the results of the scraping as a .csv file
@author Elora
Params:
 - results: the search term
 - searchInput: the search term that has been used. Necessary to access results in object.
*/
exports.downloadCsv = function (results, searchInput){
  //Create a timestamp for identification
    // var today = new Date();
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes();
    // var dateTime = date+'_'+time;

    let obj = results.results[searchInput]['1'];
    let csvResults =[];
    //loops through every result and pushes it to the csvResults array
    for (let res of obj.results) {
      csvResults.push({vLink: res.visible_link, title: res.title, snippet: res.snippet});
    }

    //Use the csvWriter to write results and download it
    csvWriter.writeRecords(csvResults)       // returns a promise
        .then(() => {
            console.log('...Done');
        });

}
