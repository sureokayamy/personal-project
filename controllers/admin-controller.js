const siteData = require('../data/siteData');
const choiceData = require('../data/choiceData');
//require the choice data here eventually

module.exports = {
    admin: (req, res) => {
        res.render('pages/admin', {
            copyrightYear: siteData.year
        });
    }
};