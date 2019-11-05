const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var path = require('path');
var scraper = require('./scraper');

app.use(express.static(path.join(__dirname, 'public')));

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({ extended: true }));

//Renders the index page
app.get('/', function (req, res) {
  res.render('index');
})

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

//Handler for the POST request that get the user input and starts the scraper
app.post('/scrape', function (req, res){
    scraper.yscrape(req.body.searchInput, req.body.domain, req.body.download);
    scraper.yscrape(req.body.searchInput, req.body.domain);
    res.redirect('/')
})

//Renders the contact page
app.get('/contact', function (req, res) {
  res.render('contact');
})

//Renders the about page
app.get('/about', function (req, res) {
  res.render('about');
})

//Page listens to localhost:3000 while running
app.listen(3000, function () {
  console.log('Scraper app listening on port 3000!')
})

app.set('view engine', 'ejs')
