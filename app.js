const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const routes = require('./routes/index-routes');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(routes);

//Routes moved to site-routes
// app.get('/', (req, res) => {
//     res.render('pages/index', {})
// });
// app.get('/index', (req, res) => {
//     res.render('pages/index', {})
// });
// app.get('/about', (req, res) => {
//     res.render('pages/about', {})
// });
// app.get('/contact', (req, res) => {
//     res.render('pages/contact', {})
// });


//Route moved to admin-routes
// app.get('/admin', (req, res) => {
//     res.render('pages/admin', {})
// });

//Routes moved to app-routes
// app.get('/challenge', (req, res) => {
//     res.render('pages/challenge', {})
// });
// app.get('/choice', (req, res) => {
//     res.render('pages/choice', {})
// });
// app.get('/result', (req, res) => {
//     res.render('pages/result', {})
// });


//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
});