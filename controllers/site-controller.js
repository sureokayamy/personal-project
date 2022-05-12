const siteData = require('../data/siteData');
//require the data here eventually

module.exports = {
    index: (req, res) => {
        res.render('pages/index', {
            copyrightYear: siteData.year
        });
    },
    about: (req, res) => {
        res.render('pages/about', {
            copyrightYear: siteData.year
        });
    },
    contact: (req, res) => {
        res.render('pages/contact', {
            copyrightYear: siteData.year
        });
    }
};