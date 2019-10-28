const express = require('express')
const app = express()
const se_scraper = require('se-scraper');
var bodyParser = require('body-parser');
var path = require('path')

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

app.post('/scrape', function (req, res){
    (async () => {
        let scrape_job = {
            search_engine: 'yandex',
            keywords: [req.body.searchInput],
              num_pages: 1,
      	yandex_settings: {
      		gl:'by'
      	},
          };

        var results = await se_scraper.scrape({}, scrape_job);

        console.dir(results, {depth: null, colors: true});

    })();
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
