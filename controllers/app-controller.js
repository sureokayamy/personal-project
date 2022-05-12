const siteData = require('../data/siteData');
const choiceData = require('../data/choiceData');
//require the data here eventually

module.exports = {
    challenge: (req, res) => {
        res.render('pages/challenge', {
            copyrightYear: siteData.year,
            allChoices: choiceData
        });
    },
    choice: (req, res) => {
        res.render('pages/choice', {
            copyrightYear: siteData.year,
            numDiners: siteData.numDiners,
        });
    },
    choice_post: (req,res) => {
        console.log(req.body);
        //pull the data from all fieldsets in the request object, then add all of it to the database
        res.redirect('/app/result');
    },
    result: (req, res) => {
        res.render('pages/result', {
            copyrightYear: siteData.year,
            allChoices: choiceData
        });
    },
    app_post: (req, res) => {
        console.log(req.body);
        const { numDiners, distance, zipcode, priceRange } = req.body;

        siteData.push({numDiners, distance, zipcode, priceRange});

        res.redirect('/app/choice');
    }
};