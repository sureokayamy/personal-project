const siteData = require('../data/siteData');
const Choice = require('../models/choiceModel');
const Restaurant = require('../models/restaurantModel');
const Diners = require('../models/dinersModel');

module.exports = {
    challenge: (req, res) => {
        res.render('pages/challenge', {
            copyrightYear: siteData.year,
            resultArray: resultArray
        });
    },
    choice: (req, res) => {
        // const {_id} = req.params;
        Diners.findOne({dinerID: 1}, (error, dinersInfo) => {
            if(error) {
                return error;
            } else {
                res.render('pages/choice', {
                    copyrightYear: siteData.year,
                    diners: dinersInfo
                });
            }
        })
    },
    choice_post: (req,res) => {
        //pull the data from all fieldsets in the choice.ejs request object, then add all of it to the choice collection in the diinder db
        const {diner1choice1, diner1choice2, diner1choice3, diner2choice1, diner2choice2, diner2choice3, diner3choice1, diner3choice2, diner3choice3, diner4choice1, diner4choice2, diner4choice3, diner5choice1, diner5choice2, diner5choice3, diner6choice1, diner6choice2, diner6choice3, diner7choice1, diner7choice2, diner7choice3, diner8choice1, diner8choice2, diner8choice3, allergy, glutenFree, halal, kosher, vegan, vegetarian  } = req.body;
        const newChoice = new Choice ({
            diner1choice1: diner1choice1,
            diner1choice2: diner1choice2,
            diner1choice3: diner1choice3,
            diner2choice1: diner2choice1,
            diner2choice2: diner2choice2,
            diner2choice3: diner2choice3,
            diner3choice1: diner3choice1,
            diner3choice2: diner3choice2,
            diner3choice3: diner3choice3,
            diner4choice1: diner4choice1,
            diner4choice2: diner4choice2,
            diner4choice3: diner4choice3,
            diner5choice1: diner5choice1,
            diner5choice2: diner5choice2,
            diner5choice3: diner5choice3,
            diner6choice1: diner6choice1,
            diner6choice2: diner6choice2,
            diner6choice3: diner6choice3,
            diner7choice1: diner7choice1,
            diner7choice2: diner7choice2,
            diner7choice3: diner7choice3,
            diner8choice1: diner8choice1,
            diner8choice2: diner8choice2,
            diner8choice3: diner8choice3,
            allergy: allergy,
            glutenFree: glutenFree,
            halal: halal,
            kosher: kosher,
            vegan: vegan,
            vegetarian: vegetarian,
            choiceID: 1
        });

        newChoice.save();
        
        res.redirect('/app/result');
    },
    result: (req, res) => {
        Restaurant.find({}, (error, allRestaurants) => {
            if(error){
                return error;
            } else {
                Diners.findOne({dinerID: 1}, (error, dinersData) => {
                    if(error) {
                        return error;
                    } else {
                        console.log('There are ' + dinersData.numDiners + ' diners.');
                 Choice.findOne({choiceID: 1}, (error, choiceData) => {
                    if(error) {
                        return error;
                    } else {
                        let sushi = 0;
                        let pizza = 0;
                        let salad = 0;
                        let diner = 0;
                        let burrito = 0;
                        let thai = 0;
                        let french = 0;
                        let hotPot = 0;
                        let burger = 0;
                        let dessert = 0;
                        let random = 0;
                        
                        //Calculating first diner's choices
                        if (choiceData.diner1choice1 == 1) {
                            sushi+= 3;
                        } else if (choiceData.diner1choice1 = 2) {
                            pizza+= 3;
                        } else if (choiceData.diner1choice1 == 3) {
                            salad+= 3;
                        } else if (choiceData.diner1choice1 == 4) {
                            diner+= 3;
                        } else if (choiceData.diner1choice1 == 5) {
                            burrito+= 3;
                        } else if (choiceData.diner1choice1 == 6) {
                            thai+= 3;
                        } else if (choiceData.diner1choice1 == 7) {
                            french+= 3;
                        } else if (choiceData.diner1choice1 == 8) {
                            hotPot+= 3;
                        } else if (choiceData.diner1choice1 == 9) {
                            burger+= 3;
                        } else if (choiceData.diner1choice1 == 10) {
                            dessert+= 3;
                        } else if (choiceData.diner1choice1 == 0) {
                            random++;
                        };

                        if (choiceData.diner1choice2 == 1) {
                            sushi+= 2;
                        } else if (choiceData.diner1choice1 == 2) {
                            pizza+= 2;
                        } else if (choiceData.diner1choice2 == 3) {
                            salad+= 2;
                        } else if (choiceData.diner1choice2 == 4) {
                            diner+= 2;
                        } else if (choiceData.diner1choice2 == 5) {
                            burrito+= 2;
                        } else if (choiceData.diner1choice2 == 6) {
                            thai+= 2;
                        } else if (choiceData.diner1choice2 == 7) {
                            french+= 2;
                        } else if (choiceData.diner1choice2 == 8) {
                            hotPot+= 2;
                        } else if (choiceData.diner1choice2 == 9) {
                            burger+= 2;
                        } else if (choiceData.diner1choice2 == 10) {
                            dessert+= 2;
                        } else if (choiceData.diner1choice2 == 0) {
                            random++;
                        };

                        if (choiceData.diner1choice3 == 1) {
                            sushi+= 1;
                        } else if (choiceData.diner1choice3 == 2) {
                            pizza+= 1;
                        } else if (choiceData.diner1choice3 == 3) {
                            salad+= 1;
                        } else if (choiceData.diner1choice3 == 4) {
                            diner+= 1;
                        } else if (choiceData.diner1choice3 == 5) {
                            burrito+= 1;
                        } else if (choiceData.diner1choice3 == 6) {
                            thai+= 1;
                        } else if (choiceData.diner1choice3 == 7) {
                            french+= 1;
                        } else if (choiceData.diner1choice3 == 8) {
                            hotPot+= 1;
                        } else if (choiceData.diner1choice3 == 9) {
                            burger+= 1;
                        } else if (choiceData.diner1choice3 == 10) {
                            dessert+= 1;
                        } else if (choiceData.diner1choice3 == 0) {
                            random++;
                        };

                        //Calculating second diner's choices
                        if (choiceData.diner2choice1 == 1) {
                            sushi+= 3;
                        } else if (choiceData.diner2choice1 == 2) {
                            pizza+= 3;
                        } else if (choiceData.diner2choice1 == 3) {
                            salad+= 3;
                        } else if (choiceData.diner2choice1 == 4) {
                            diner+= 3;
                        } else if (choiceData.diner2choice1 == 5) {
                            burrito+= 3;
                        } else if (choiceData.diner2choice1 == 6) {
                            thai+= 3;
                        } else if (choiceData.diner2choice1 == 7) {
                            french+= 3;
                        } else if (choiceData.diner2choice1 == 8) {
                            hotPot+= 3;
                        } else if (choiceData.diner2choice1 == 9) {
                            burger+= 3;
                        } else if (choiceData.diner2choice1 == 10) {
                            dessert+= 3;
                        } else if (choiceData.diner2choice1 == 0) {
                            random++;
                        };

                        if (choiceData.diner2choice2 == 1) {
                            sushi+= 2;
                        } else if (choiceData.diner2choice1 == 2) {
                            pizza+= 2;
                        } else if (choiceData.diner2choice2 == 3) {
                            salad+= 2;
                        } else if (choiceData.diner2choice2 == 4) {
                            diner+= 2;
                        } else if (choiceData.diner2choice2 == 5) {
                            burrito+= 2;
                        } else if (choiceData.diner2choice2 == 6) {
                            thai+= 2;
                        } else if (choiceData.diner2choice2 == 7) {
                            french+= 2;
                        } else if (choiceData.diner2choice2 == 8) {
                            hotPot+= 2;
                        } else if (choiceData.diner2choice2 == 9) {
                            burger+= 2;
                        } else if (choiceData.diner2choice2 == 10) {
                            dessert+= 2;
                        } else if (choiceData.diner2choice2 == 0) {
                            random++;
                        };

                        if (choiceData.diner2choice3 == 1) {
                            sushi+= 1;
                        } else if (choiceData.diner2choice3 == 2) {
                            pizza+= 1;
                        } else if (choiceData.diner2choice3 == 3) {
                            salad+= 1;
                        } else if (choiceData.diner2choice3 == 4) {
                            diner+= 1;
                        } else if (choiceData.diner2choice3 == 5) {
                            burrito+= 1;
                        } else if (choiceData.diner2choice3 == 6) {
                            thai+= 1;
                        } else if (choiceData.diner2choice3 == 7) {
                            french+= 1;
                        } else if (choiceData.diner2choice3 == 8) {
                            hotPot+= 1;
                        } else if (choiceData.diner2choice3 == 9) {
                            burger+= 1;
                        } else if (choiceData.diner2choice3 == 10) {
                            dessert+= 1;
                        } else if (choiceData.diner2choice3 == 0) {
                            random++;
                        };

                        //Calculating third diner's choices
                        if (choiceData.diner3choice1 == 1) {
                            sushi+= 3;
                        } else if (choiceData.diner3choice1 == 2) {
                            pizza+= 3;
                        } else if (choiceData.diner3choice1 == 3) {
                            salad+= 3;
                        } else if (choiceData.diner3choice1 == 4) {
                            diner+= 3;
                        } else if (choiceData.diner3choice1 == 5) {
                            burrito+= 3;
                        } else if (choiceData.diner3choice1 == 6) {
                            thai+= 3;
                        } else if (choiceData.diner3choice1 == 7) {
                            french+= 3;
                        } else if (choiceData.diner3choice1 == 8) {
                            hotPot+= 3;
                        } else if (choiceData.diner3choice1 == 9) {
                            burger+= 3;
                        } else if (choiceData.diner3choice1 == 10) {
                            dessert+= 3;
                        } else if (choiceData.diner3choice1 == 0) {
                            random++;
                        };

                        if (choiceData.diner3choice2 == 1) {
                            sushi+= 2;
                        } else if (choiceData.diner3choice1 == 2) {
                            pizza+= 2;
                        } else if (choiceData.diner3choice2 == 3) {
                            salad+= 2;
                        } else if (choiceData.diner3choice2 == 4) {
                            diner+= 2;
                        } else if (choiceData.diner3choice2 == 5) {
                            burrito+= 2;
                        } else if (choiceData.diner3choice2 == 6) {
                            thai+= 2;
                        } else if (choiceData.diner3choice2 == 7) {
                            french+= 2;
                        } else if (choiceData.diner3choice2 == 8) {
                            hotPot+= 2;
                        } else if (choiceData.diner3choice2 == 9) {
                            burger+= 2;
                        } else if (choiceData.diner3choice2 == 10) {
                            dessert+= 2;
                        } else if (choiceData.diner3choice2 == 0) {
                            random++;
                        };

                        if (choiceData.diner3choice3 == 1) {
                            sushi+= 1;
                        } else if (choiceData.diner3choice3 == 2) {
                            pizza+= 1;
                        } else if (choiceData.diner3choice3 == 3) {
                            salad+= 1;
                        } else if (choiceData.diner3choice3 == 4) {
                            diner+= 1;
                        } else if (choiceData.diner3choice3 == 5) {
                            burrito+= 1;
                        } else if (choiceData.diner3choice3 == 6) {
                            thai+= 1;
                        } else if (choiceData.diner3choice3 == 7) {
                            french+= 1;
                        } else if (choiceData.diner3choice3 == 8) {
                            hotPot+= 1;
                        } else if (choiceData.diner3choice3 == 9) {
                            burger+= 1;
                        } else if (choiceData.diner3choice3 == 10) {
                            dessert+= 1;
                        } else if (choiceData.diner3choice3 == 0) {
                            random++;
                        };

                        //Calculating fourth diner's choices
                        if (choiceData.diner4choice1 == 1) {
                            sushi+= 3;
                        } else if (choiceData.diner4choice1 == 2) {
                            pizza+= 3;
                        } else if (choiceData.diner4choice1 == 3) {
                            salad+= 3;
                        } else if (choiceData.diner4choice1 == 4) {
                            diner+= 3;
                        } else if (choiceData.diner4choice1 == 5) {
                            burrito+= 3;
                        } else if (choiceData.diner4choice1 == 6) {
                            thai+= 3;
                        } else if (choiceData.diner4choice1 == 7) {
                            french+= 3;
                        } else if (choiceData.diner4choice1 == 8) {
                            hotPot+= 3;
                        } else if (choiceData.diner4choice1 == 9) {
                            burger+= 3;
                        } else if (choiceData.diner4choice1 == 10) {
                            dessert+= 3;
                        } else if (choiceData.diner4choice1 == 0) {
                            random++;
                        };

                        if (choiceData.diner4choice2 == 1) {
                            sushi+= 2;
                        } else if (choiceData.diner4choice1 == 2) {
                            pizza+= 2;
                        } else if (choiceData.diner4choice2 == 3) {
                            salad+= 2;
                        } else if (choiceData.diner4choice2 == 4) {
                            diner+= 2;
                        } else if (choiceData.diner4choice2 == 5) {
                            burrito+= 2;
                        } else if (choiceData.diner4choice2 == 6) {
                            thai+= 2;
                        } else if (choiceData.diner4choice2 == 7) {
                            french+= 2;
                        } else if (choiceData.diner4choice2 == 8) {
                            hotPot+= 2;
                        } else if (choiceData.diner4choice2 == 9) {
                            burger+= 2;
                        } else if (choiceData.diner4choice2 == 10) {
                            dessert+= 2;
                        } else if (choiceData.diner4choice2 == 0) {
                            random++;
                        };

                        if (choiceData.diner4choice3 == 1) {
                            sushi+= 1;
                        } else if (choiceData.diner4choice3 == 2) {
                            pizza+= 1;
                        } else if (choiceData.diner4choice3 == 3) {
                            salad+= 1;
                        } else if (choiceData.diner4choice3 == 4) {
                            diner+= 1;
                        } else if (choiceData.diner4choice3 == 5) {
                            burrito+= 1;
                        } else if (choiceData.diner4choice3 == 6) {
                            thai+= 1;
                        } else if (choiceData.diner4choice3 == 7) {
                            french+= 1;
                        } else if (choiceData.diner4choice3 == 8) {
                            hotPot+= 1;
                        } else if (choiceData.diner4choice3 == 9) {
                            burger+= 1;
                        } else if (choiceData.diner4choice3 == 10) {
                            dessert+= 1;
                        } else if (choiceData.diner4choice3 == 0) {
                            random++;
                        };

                        //Calculating fift5 diner's choices
                        if (choiceData.diner5choice1 == 1) {
                            sushi+= 3;
                        } else if (choiceData.diner5choice1 == 2) {
                            pizza+= 3;
                        } else if (choiceData.diner5choice1 == 3) {
                            salad+= 3;
                        } else if (choiceData.diner5choice1 == 4) {
                            diner+= 3;
                        } else if (choiceData.diner5choice1 == 5) {
                            burrito+= 3;
                        } else if (choiceData.diner5choice1 == 6) {
                            thai+= 3;
                        } else if (choiceData.diner5choice1 == 7) {
                            french+= 3;
                        } else if (choiceData.diner5choice1 == 8) {
                            hotPot+= 3;
                        } else if (choiceData.diner5choice1 == 9) {
                            burger+= 3;
                        } else if (choiceData.diner5choice1 == 10) {
                            dessert+= 3;
                        } else if (choiceData.diner5choice1 == 0) {
                            random++;
                        };

                        if (choiceData.diner5choice2 == 1) {
                            sushi+= 2;
                        } else if (choiceData.diner5choice1 == 2) {
                            pizza+= 2;
                        } else if (choiceData.diner5choice2 == 3) {
                            salad+= 2;
                        } else if (choiceData.diner5choice2 == 4) {
                            diner+= 2;
                        } else if (choiceData.diner5choice2 == 5) {
                            burrito+= 2;
                        } else if (choiceData.diner5choice2 == 6) {
                            thai+= 2;
                        } else if (choiceData.diner5choice2 == 7) {
                            french+= 2;
                        } else if (choiceData.diner5choice2 == 8) {
                            hotPot+= 2;
                        } else if (choiceData.diner5choice2 == 9) {
                            burger+= 2;
                        } else if (choiceData.diner5choice2 == 10) {
                            dessert+= 2;
                        } else if (choiceData.diner5choice2 == 0) {
                            random++;
                        };

                        if (choiceData.diner5choice3 == 1) {
                            sushi+= 1;
                        } else if (choiceData.diner5choice3 == 2) {
                            pizza+= 1;
                        } else if (choiceData.diner5choice3 == 3) {
                            salad+= 1;
                        } else if (choiceData.diner5choice3 == 4) {
                            diner+= 1;
                        } else if (choiceData.diner5choice3 == 5) {
                            burrito+= 1;
                        } else if (choiceData.diner5choice3 == 6) {
                            thai+= 1;
                        } else if (choiceData.diner5choice3 == 7) {
                            french+= 1;
                        } else if (choiceData.diner5choice3 == 8) {
                            hotPot+= 1;
                        } else if (choiceData.diner5choice3 == 9) {
                            burger+= 1;
                        } else if (choiceData.diner5choice3 == 10) {
                            dessert+= 1;
                        } else if (choiceData.diner5choice3 == 0) {
                            random++;
                        };

                        //Calculating sixth diner's choices
                        if (choiceData.diner6choice1 == 1) {
                            sushi+= 3;
                        } else if (choiceData.diner6choice1 == 2) {
                            pizza+= 3;
                        } else if (choiceData.diner6choice1 == 3) {
                            salad+= 3;
                        } else if (choiceData.diner6choice1 == 4) {
                            diner+= 3;
                        } else if (choiceData.diner6choice1 == 5) {
                            burrito+= 3;
                        } else if (choiceData.diner6choice1 == 6) {
                            thai+= 3;
                        } else if (choiceData.diner6choice1 == 7) {
                            french+= 3;
                        } else if (choiceData.diner6choice1 == 8) {
                            hotPot+= 3;
                        } else if (choiceData.diner6choice1 == 9) {
                            burger+= 3;
                        } else if (choiceData.diner6choice1 == 10) {
                            dessert+= 3;
                        } else if (choiceData.diner6choice1 == 0) {
                            random++;
                        };

                        if (choiceData.diner6choice2 == 1) {
                            sushi+= 2;
                        } else if (choiceData.diner6choice1 == 2) {
                            pizza+= 2;
                        } else if (choiceData.diner6choice2 == 3) {
                            salad+= 2;
                        } else if (choiceData.diner6choice2 == 4) {
                            diner+= 2;
                        } else if (choiceData.diner6choice2 == 5) {
                            burrito+= 2;
                        } else if (choiceData.diner6choice2 == 6) {
                            thai+= 2;
                        } else if (choiceData.diner6choice2 == 7) {
                            french+= 2;
                        } else if (choiceData.diner6choice2 == 8) {
                            hotPot+= 2;
                        } else if (choiceData.diner6choice2 == 9) {
                            burger+= 2;
                        } else if (choiceData.diner6choice2 == 10) {
                            dessert+= 2;
                        } else if (choiceData.diner6choice2 == 0) {
                            random++;
                        };

                        if (choiceData.diner6choice3 == 1) {
                            sushi+= 1;
                        } else if (choiceData.diner6choice3 == 2) {
                            pizza+= 1;
                        } else if (choiceData.diner6choice3 == 3) {
                            salad+= 1;
                        } else if (choiceData.diner6choice3 == 4) {
                            diner+= 1;
                        } else if (choiceData.diner6choice3 == 5) {
                            burrito+= 1;
                        } else if (choiceData.diner6choice3 == 6) {
                            thai+= 1;
                        } else if (choiceData.diner6choice3 == 7) {
                            french+= 1;
                        } else if (choiceData.diner6choice3 == 8) {
                            hotPot+= 1;
                        } else if (choiceData.diner6choice3 == 9) {
                            burger+= 1;
                        } else if (choiceData.diner6choice3 == 10) {
                            dessert+= 1;
                        } else if (choiceData.diner6choice3 == 0) {
                            random++;
                        };

                        //Calculating seventh diner's choices
                        if (choiceData.diner7choice1 == 1) {
                            sushi+= 3;
                        } else if (choiceData.diner7choice1 == 2) {
                            pizza+= 3;
                        } else if (choiceData.diner7choice1 == 3) {
                            salad+= 3;
                        } else if (choiceData.diner7choice1 == 4) {
                            diner+= 3;
                        } else if (choiceData.diner7choice1 == 5) {
                            burrito+= 3;
                        } else if (choiceData.diner7choice1 == 6) {
                            thai+= 3;
                        } else if (choiceData.diner7choice1 == 7) {
                            french+= 3;
                        } else if (choiceData.diner7choice1 == 8) {
                            hotPot+= 3;
                        } else if (choiceData.diner7choice1 == 9) {
                            burger+= 3;
                        } else if (choiceData.diner7choice1 == 10) {
                            dessert+= 3;
                        } else if (choiceData.diner7choice1 == 0) {
                            random++;
                        };

                        if (choiceData.diner7choice2 == 1) {
                            sushi+= 2;
                        } else if (choiceData.diner7choice1 == 2) {
                            pizza+= 2;
                        } else if (choiceData.diner7choice2 == 3) {
                            salad+= 2;
                        } else if (choiceData.diner7choice2 == 4) {
                            diner+= 2;
                        } else if (choiceData.diner7choice2 == 5) {
                            burrito+= 2;
                        } else if (choiceData.diner7choice2 == 6) {
                            thai+= 2;
                        } else if (choiceData.diner7choice2 == 7) {
                            french+= 2;
                        } else if (choiceData.diner7choice2 == 8) {
                            hotPot+= 2;
                        } else if (choiceData.diner7choice2 == 9) {
                            burger+= 2;
                        } else if (choiceData.diner7choice2 == 10) {
                            dessert+= 2;
                        } else if (choiceData.diner7choice2 == 0) {
                            random++;
                        };

                        if (choiceData.diner7choice3 == 1) {
                            sushi+= 1;
                        } else if (choiceData.diner7choice3 == 2) {
                            pizza+= 1;
                        } else if (choiceData.diner7choice3 == 3) {
                            salad+= 1;
                        } else if (choiceData.diner7choice3 == 4) {
                            diner+= 1;
                        } else if (choiceData.diner7choice3 == 5) {
                            burrito+= 1;
                        } else if (choiceData.diner7choice3 == 6) {
                            thai+= 1;
                        } else if (choiceData.diner7choice3 == 7) {
                            french+= 1;
                        } else if (choiceData.diner7choice3 == 8) {
                            hotPot+= 1;
                        } else if (choiceData.diner7choice3 == 9) {
                            burger+= 1;
                        } else if (choiceData.diner7choice3 == 10) {
                            dessert+= 1;
                        } else if (choiceData.diner7choice3 == 0) {
                            random++;
                        };

                        //Calculating eigth diner's choices
                        if (choiceData.diner8choice1 == 1) {
                            sushi+= 3;
                        } else if (choiceData.diner8choice1 == 2) {
                            pizza+= 3;
                        } else if (choiceData.diner8choice1 == 3) {
                            salad+= 3;
                        } else if (choiceData.diner8choice1 == 4) {
                            diner+= 3;
                        } else if (choiceData.diner8choice1 == 5) {
                            burrito+= 3;
                        } else if (choiceData.diner8choice1 == 6) {
                            thai+= 3;
                        } else if (choiceData.diner8choice1 == 7) {
                            french+= 3;
                        } else if (choiceData.diner8choice1 == 8) {
                            hotPot+= 3;
                        } else if (choiceData.diner8choice1 == 9) {
                            burger+= 3;
                        } else if (choiceData.diner8choice1 == 10) {
                            dessert+= 3;
                        } else if (choiceData.diner8choice1 == 0) {
                            random++;
                        };

                        if (choiceData.diner8choice2 == 1) {
                            sushi+= 2;
                        } else if (choiceData.diner8choice1 == 2) {
                            pizza+= 2;
                        } else if (choiceData.diner8choice2 == 3) {
                            salad+= 2;
                        } else if (choiceData.diner8choice2 == 4) {
                            diner+= 2;
                        } else if (choiceData.diner8choice2 == 5) {
                            burrito+= 2;
                        } else if (choiceData.diner8choice2 == 6) {
                            thai+= 2;
                        } else if (choiceData.diner8choice2 == 7) {
                            french+= 2;
                        } else if (choiceData.diner8choice2 == 8) {
                            hotPot+= 2;
                        } else if (choiceData.diner8choice2 == 9) {
                            burger+= 2;
                        } else if (choiceData.diner8choice2 == 10) {
                            dessert+= 2;
                        } else if (choiceData.diner8choice2 == 0) {
                            random++;
                        };

                        if (choiceData.diner8choice3 == 1) {
                            sushi+= 1;
                        } else if (choiceData.diner8choice3 == 2) {
                            pizza+= 1;
                        } else if (choiceData.diner8choice3 == 3) {
                            salad+= 1;
                        } else if (choiceData.diner8choice3 == 4) {
                            diner+= 1;
                        } else if (choiceData.diner8choice3 == 5) {
                            burrito+= 1;
                        } else if (choiceData.diner8choice3 == 6) {
                            thai+= 1;
                        } else if (choiceData.diner8choice3 == 7) {
                            french+= 1;
                        } else if (choiceData.diner8choice3 == 8) {
                            hotPot+= 1;
                        } else if (choiceData.diner8choice3 == 9) {
                            burger+= 1;
                        } else if (choiceData.diner8choice3 == 10) {
                            dessert+= 1;
                        } else if (choiceData.diner8choice3 == 0) {
                            random++;
                        }8

                    

                        let resultArray = [];

                        if (sushi >= 2) {
                            let sushiTotal = sushi;
                            sushi = {
                                cuisine: 'sushi',
                                name: 'Sushi',
                                total: sushiTotal
                            };
                            resultArray.push(sushi);
                        };
                        if (pizza >= 2) {
                            let pizzaTotal = pizza;
                            pizza = {
                                cuisine: 'pizza',
                                name: 'Pizza',
                                total:pizzaTotal
                            };
                            resultArray.push(pizza);
                        };
                        if (salad >= 2) {
                            let saladTotal = salad;
                            salad = {
                                cuisine: 'salad',
                                name: 'Salad',
                                total: saladTotal
                            };
                            resultArray.push(salad);
                        };
                        if (diner >= 2) {
                            let dinerTotal = diner;
                            diner = {
                                cuisine: 'diner',
                                name: 'Diner Food',
                                total: dinerTotal
                            };
                            resultArray.push(diner);
                        };
                        if (burrito >= 2) {
                            let burritoTotal = burrito;
                            burrito = {
                                cuisine: 'burrito',
                                name: 'Burritos',
                                total: burritoTotal
                            };
                            resultArray.push(burrito);
                        };
                        if (thai >= 2) {
                            let thaiTotal = thai;
                            thai = {
                                cuisine: 'thai',
                                name: 'Thai Food',
                                total: thaiTotal
                            };
                            resultArray.push(thai);
                        };
                        if (french >= 2) {
                            let frenchTotal = french;
                            french = {
                                cuisine: 'french',
                                name: 'French Food',
                                total: frenchTotal
                            };
                            resultArray.push(french);
                        };
                        if (hotPot >= 2) {
                            let hotPotTotal = hotPot;
                            hotPot = {
                                cuisine: 'hot pot',
                                name: 'Hot Pot',
                                total: hotPotTotal
                            };
                            resultArray.push(hotPot);
                        };
                        if (burger >= 2) {
                            let burgerTotal = burger;
                            burger = {
                                cuisine: 'burger',
                                name: 'Burgers',
                                total: burgerTotal
                            };
                            resultArray.push(burger);
                        };
                        if (dessert >= 2) {
                            let dessertTotal = dessert;
                            dessert = {
                                cuisine: 'dessert',
                                name: 'Dessert',
                                total: dessertTotal
                            };
                            resultArray.push(dessert);
                        };
                        if (random >= 2) {
                            let randomTotal = random;
                            random = {
                                cuisine: 'random',
                                name: 'Surprise us!',
                                total: randomTotal
                            };
                            resultArray.push(random);
                        };


                        resultArray.sort(function (x, y) {
                            return y.total - x.total;
                        });

                        if (resultArray.length > 5) {
                            resultArray.length = 5;
                        };
                        
                                res.render('pages/result', {
                                    copyrightYear: siteData.year,
                                    allRestaurants: allRestaurants,
                                    choiceData: choiceData,
                                    resultArray: resultArray,
                                    dinersData: dinersData
                                });
                            }
                        })
                    }
                 })
            }
        }) 
    },
    app_post: (req, res) => {
        //pull the data from form in index.ejs request object, then add all of it to the diners collection in the diinder db
        const { numDiners, distance, zipcode, priceRange } = req.body;

        const newDiners = new Diners ({
            numDiners: numDiners,
            distance: distance,
            zipcode: zipcode,
            priceRange: priceRange,
            dinerID: 1
        });

        let diners;
        newDiners.save(function (err, diners) {
            console.log(diners._id);
            diners = diners;
        });

        // book1.save(function (err, book) {
        //     if (err) return console.error(err);
        //     console.log(book.name + " saved to bookstore collection.");
        //   });
      

        res.redirect('/app/choice');
    },
    update: (req, res) => {
        const {_id } = req.params;
        const {name, cuisine, priceRange, dineIn, party6Plus, reservations, takeOut, distance, dietaryNeeds, minorityOO} = req.body;

        Restaurant.findByIdAndUpdate(_id, {$set: {
            name: name,
            cuisine: cuisine, 
            priceRange: priceRange, 
            dineIn: dineIn, 
            party6Plus: party6Plus, 
            reservations: reservations, 
            takeOut: takeOut, 
            distance: distance, 
            dietaryNeeds: dietaryNeeds, 
            minorityOO: minorityOO
        }}, {new: true}, error => {
            if(error) {
                return error;
            } else {
                res.redirect('/admin');
            }
        })
    },
    create: (req, res) => {
        const {name, cuisine, priceRange, dineIn, party6Plus, reservations, takeOut, distance, dietaryNeeds, minorityOO} = req.body;

        const newRestaurant = new Restaurant ({
            name: name,
            cuisine: cuisine, 
            priceRange: priceRange, 
            dineIn: dineIn, 
            party6Plus: party6Plus, 
            reservations: reservations, 
            takeOut: takeOut, 
            distance: distance, 
            dietaryNeeds: dietaryNeeds, 
            minorityOO: minorityOO
        });

        newRestaurant.save();

        res.redirect('/admin');
    },
    delete: (req, res) => {
        const {_id } = req.params;
        Restaurant.deleteOne({_id: _id}, error => {
            if (error) {
                return error;
            } else {
                res.redirect('/admin')
            }
        });
    },
};