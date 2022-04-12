const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const path = require('path');

app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
    res.render('pages/index', {})
});
app.get('/index', (req, res) => {
    res.render('pages/index', {})
});
app.get('/about', (req, res) => {
    res.render('pages/about', {})
});
app.get('/admin', (req, res) => {
    res.render('pages/admin', {})
});
app.get('/challenge', (req, res) => {
    res.render('pages/challenge', {})
});
app.get('/choice', (req, res) => {
    res.render('pages/choice', {})
});
app.get('/contact', (req, res) => {
    res.render('pages/contact', {})
});
app.get('/result', (req, res) => {
    res.render('pages/result', {})
});


//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
});