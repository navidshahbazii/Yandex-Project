/*This module sets the CRONJOB
@author Elora
Params:
 - searchInput: the search term that has been used. Necessary to access results in object.
 - time: the selected time at which the CRONJOB is activated. Either a day of the week (once a week) or an hour (repeat daily in that case)
 - searchDomain: the subdomain where the search will be performed, default is yandex.
 - downloadCheck: true if Download option has been ticked off
*/

exports.setCronJob = function (searchInput, time, searchDomain, downloadCheck){
  console.log(time);

}
