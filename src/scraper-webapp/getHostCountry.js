var ping = require('ping');
var geoip = require('geoip-lite');

/*
This module filters the domain name of the results out of the link.
It then pings its IP address and uses the geoip module to look for its country of origin
@author: Elora
Params:
  - url: The url of the website that is to be located
*/
exports.getHostCountry = async function (url) {
    /* Uses Regular Expressions to filter out domain of the link.
    Code found at http://www.primaryobjects.com/2012/11/19/parsing-hostname-and-domain-from-a-url-with-javascript/*/

    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {

      /*Pings the found domain of the link. If an IP address has been found it resolves the Promise
      and passes the IP to the geoip function. This determines the country, where the IP address is located
      In the end we pass the country back with the promise*/
      return new Promise(function(resolve,reject){
        ping.promise.probe(match[2])
            .then(function (res) {
                  resolve(geoip.lookup(res.numeric_host).country);
            });
      });
    }
    else {
        return "not found";
    }
}
