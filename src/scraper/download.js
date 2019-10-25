var fs = require('fs');

//This module downloads the the results as a JSON file
exports.downloadJSON = function (results){
  //Create a timestamp for identification
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+'_'+time;

    //Write file to local machine
    //// TODO: Where exactly should the files be stored? Give user option for a path?

    fs.writeFile(dateTime+".txt", JSON.stringify(results, null, 2), function(err){
      if (err){
        console.log(err);
      }
    });


}
