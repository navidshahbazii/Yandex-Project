const express = require('express')
const app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.render('index');
})

app.get('/contact.html', function (req, res) {
  res.render('contact');
})

app.get('/about.html', function (req, res) {
  res.render('about');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.set('view engine', 'ejs')
