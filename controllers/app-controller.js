const siteData = require('../data/siteData');
const Choice = require('../models/choiceModel');
const Restaurant = require('../models/restaurantModel');
const Diners = require('../models/dinersModel');

module.exports = {
    challenge: (req, res) => {
        Restaurant.find({}, (error, allRestaurants) => {
            if(error){
                return error;
            } else {
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
                    switch (choiceData.diner1choice1) {
                        case 1:
                            sushi+=3;
                            break;
                        case 2: 
                            pizza+=3;
                            break;
                        case 3:
                            salad+=3;
                            break;
                        case 4:
                            diner+=3;
                            break;
                        case 5:
                            burrito+=3;
                            break;
                        case 6:
                            thai+=3;
                            break;
                        case 7:
                            french+=3;
                            break;
                        case 8:
                            hotPot+=3;
                            break;
                        case 9:
                            burger+=3;
                            break;
                        case 10:
                            dessert+=3;
                        // case 0: 
                        //     random+=3;
                        //     break;
                        default:
                            console.log(`There was an error with the first diner's first selection.`);
                    };
                

                    switch (choiceData.diner1choice2) {
                        case 1:
                            sushi+=2;
                            break;
                        case 2: 
                            pizza+=2;
                            break;
                        case 3:
                            salad+=2;
                            break;
                        case 4:
                            diner+=2;
                            break;
                        case 5:
                            burrito+=2;
                            break;
                        case 6:
                            thai+=2;
                            break;
                        case 7:
                            french+=2;
                            break;
                        case 8:
                            hotPot+=2;
                            break;
                        case 9:
                            burger+=2;
                            break;
                        case 10:
                            dessert+=2;
                        // case 0: 
                        //     random+=2;
                        //     break;
                        default:
                            console.log(`There was an error with the first diner's second selection.`);
                    };

                    
                    switch (choiceData.diner1choice3) {
                        case 1:
                            sushi+=1;
                            break;
                        case 2: 
                            pizza+=1;
                            break;
                        case 3:
                            salad+=1;
                            break;
                        case 4:
                            diner+=1;
                            break;
                        case 5:
                            burrito+=1;
                            break;
                        case 6:
                            thai+=1;
                            break;
                        case 7:
                            french+=1;
                            break;
                        case 8:
                            hotPot+=1;
                            break;
                        case 9:
                            burger+=1;
                            break;
                        case 10:
                            dessert+=1;
                        // case 0: 
                        //     random+=1;
                        //     break;
                        default:
                            console.log(`There was an error with the first diner's third selection.`);
                    };

                    //Calculating second diner's choices
                    switch (choiceData.diner2choice1) {
                        case 1:
                            sushi+=3;
                            break;
                        case 2: 
                            pizza+=3;
                            break;
                        case 3:
                            salad+=3;
                            break;
                        case 4:
                            diner+=3;
                            break;
                        case 5:
                            burrito+=3;
                            break;
                        case 6:
                            thai+=3;
                            break;
                        case 7:
                            french+=3;
                            break;
                        case 8:
                            hotPot+=3;
                            break;
                        case 9:
                            burger+=3;
                            break;
                        case 10:
                            dessert+=3;
                        // case 0: 
                        //     random+=3;
                        //     break;
                        default:
                            console.log(`There was an error with the second diner's first selection.`);
                    };
                

                    switch (choiceData.diner2choice2) {
                        case 1:
                            sushi+=2;
                            break;
                        case 2: 
                            pizza+=2;
                            break;
                        case 3:
                            salad+=2;
                            break;
                        case 4:
                            diner+=2;
                            break;
                        case 5:
                            burrito+=2;
                            break;
                        case 6:
                            thai+=2;
                            break;
                        case 7:
                            french+=2;
                            break;
                        case 8:
                            hotPot+=2;
                            break;
                        case 9:
                            burger+=2;
                            break;
                        case 10:
                            dessert+=2;
                        // case 0: 
                        //     random+=2;
                        //     break;
                        default:
                            console.log(`There was an error with the second diner's second selection.`);
                    };

                    
                    switch (choiceData.diner2choice3) {
                        case 1:
                            sushi+=1;
                            break;
                        case 2: 
                            pizza+=1;
                            break;
                        case 3:
                            salad+=1;
                            break;
                        case 4:
                            diner+=1;
                            break;
                        case 5:
                            burrito+=1;
                            break;
                        case 6:
                            thai+=1;
                            break;
                        case 7:
                            french+=1;
                            break;
                        case 8:
                            hotPot+=1;
                            break;
                        case 9:
                            burger+=1;
                            break;
                        case 10:
                            dessert+=1;
                        // case 0: 
                        //     random+=1;
                        //     break;
                        default:
                            console.log(`There was an error with the second diner's third selection.`);
                    };

                    //Calculating third diner's choices
                    switch (choiceData.diner3choice1) {
                        case 1:
                            sushi+=3;
                            break;
                        case 2: 
                            pizza+=3;
                            break;
                        case 3:
                            salad+=3;
                            break;
                        case 4:
                            diner+=3;
                            break;
                        case 5:
                            burrito+=3;
                            break;
                        case 6:
                            thai+=3;
                            break;
                        case 7:
                            french+=3;
                            break;
                        case 8:
                            hotPot+=3;
                            break;
                        case 9:
                            burger+=3;
                            break;
                        case 10:
                            dessert+=3;
                        // case 0: 
                        //     random+=3;
                        //     break;
                        default:
                            console.log(`There was an error with the third diner's first selection.`);
                    };
                

                    switch (choiceData.diner3choice2) {
                        case 1:
                            sushi+=2;
                            break;
                        case 2: 
                            pizza+=2;
                            break;
                        case 3:
                            salad+=2;
                            break;
                        case 4:
                            diner+=2;
                            break;
                        case 5:
                            burrito+=2;
                            break;
                        case 6:
                            thai+=2;
                            break;
                        case 7:
                            french+=2;
                            break;
                        case 8:
                            hotPot+=2;
                            break;
                        case 9:
                            burger+=2;
                            break;
                        case 10:
                            dessert+=2;
                        // case 0: 
                        //     random+=2;
                        //     break;
                        default:
                            console.log(`There was an error with the third diner's second selection.`);
                    };

                    
                    switch (choiceData.diner3choice3) {
                        case 1:
                            sushi+=1;
                            break;
                        case 2: 
                            pizza+=1;
                            break;
                        case 3:
                            salad+=1;
                            break;
                        case 4:
                            diner+=1;
                            break;
                        case 5:
                            burrito+=1;
                            break;
                        case 6:
                            thai+=1;
                            break;
                        case 7:
                            french+=1;
                            break;
                        case 8:
                            hotPot+=1;
                            break;
                        case 9:
                            burger+=1;
                            break;
                        case 10:
                            dessert+=1;
                        // case 0: 
                        //     random+=1;
                        //     break;
                        default:
                            console.log(`There was an error with the third diner's third selection.`);
                    };

                    //Calculating fourth diner's choices
                    switch (choiceData.diner4choice1) {
                        case 1:
                            sushi+=3;
                            break;
                        case 2: 
                            pizza+=3;
                            break;
                        case 3:
                            salad+=3;
                            break;
                        case 4:
                            diner+=3;
                            break;
                        case 5:
                            burrito+=3;
                            break;
                        case 6:
                            thai+=3;
                            break;
                        case 7:
                            french+=3;
                            break;
                        case 8:
                            hotPot+=3;
                            break;
                        case 9:
                            burger+=3;
                            break;
                        case 10:
                            dessert+=3;
                        // case 0: 
                        //     random+=3;
                        //     break;
                        default:
                            console.log(`There was an error with the fourth diner's first selection.`);
                    };
                

                    switch (choiceData.diner4choice2) {
                        case 1:
                            sushi+=2;
                            break;
                        case 2: 
                            pizza+=2;
                            break;
                        case 3:
                            salad+=2;
                            break;
                        case 4:
                            diner+=2;
                            break;
                        case 5:
                            burrito+=2;
                            break;
                        case 6:
                            thai+=2;
                            break;
                        case 7:
                            french+=2;
                            break;
                        case 8:
                            hotPot+=2;
                            break;
                        case 9:
                            burger+=2;
                            break;
                        case 10:
                            dessert+=2;
                        // case 0: 
                        //     random+=2;
                        //     break;
                        default:
                            console.log(`There was an error with the fourth diner's second selection.`);
                    };

                    
                    switch (choiceData.diner4choice3) {
                        case 1:
                            sushi+=1;
                            break;
                        case 2: 
                            pizza+=1;
                            break;
                        case 3:
                            salad+=1;
                            break;
                        case 4:
                            diner+=1;
                            break;
                        case 5:
                            burrito+=1;
                            break;
                        case 6:
                            thai+=1;
                            break;
                        case 7:
                            french+=1;
                            break;
                        case 8:
                            hotPot+=1;
                            break;
                        case 9:
                            burger+=1;
                            break;
                        case 10:
                            dessert+=1;
                        // case 0: 
                        //     random+=1;
                        //     break;
                        default:
                            console.log(`There was an error with the fourth diner's third selection.`);
                    };

                    // //Calculating fifth diner's choices
                    switch (choiceData.diner5choice1) {
                        case 1:
                            sushi+=3;
                            break;
                        case 2: 
                            pizza+=3;
                            break;
                        case 3:
                            salad+=3;
                            break;
                        case 4:
                            diner+=3;
                            break;
                        case 5:
                            burrito+=3;
                            break;
                        case 6:
                            thai+=3;
                            break;
                        case 7:
                            french+=3;
                            break;
                        case 8:
                            hotPot+=3;
                            break;
                        case 9:
                            burger+=3;
                            break;
                        case 10:
                            dessert+=3;
                        // case 0: 
                        //     random+=3;
                        //     break;
                        default:
                            console.log(`There was an error with the fifth diner's first selection.`);
                    };
                

                    switch (choiceData.diner5choice2) {
                        case 1:
                            sushi+=2;
                            break;
                        case 2: 
                            pizza+=2;
                            break;
                        case 3:
                            salad+=2;
                            break;
                        case 4:
                            diner+=2;
                            break;
                        case 5:
                            burrito+=2;
                            break;
                        case 6:
                            thai+=2;
                            break;
                        case 7:
                            french+=2;
                            break;
                        case 8:
                            hotPot+=2;
                            break;
                        case 9:
                            burger+=2;
                            break;
                        case 10:
                            dessert+=2;
                        // case 0: 
                        //     random+=2;
                        //     break;
                        default:
                            console.log(`There was an error with the fifth diner's second selection.`);
                    };

                    
                    switch (choiceData.diner5choice3) {
                        case 1:
                            sushi+=1;
                            break;
                        case 2: 
                            pizza+=1;
                            break;
                        case 3:
                            salad+=1;
                            break;
                        case 4:
                            diner+=1;
                            break;
                        case 5:
                            burrito+=1;
                            break;
                        case 6:
                            thai+=1;
                            break;
                        case 7:
                            french+=1;
                            break;
                        case 8:
                            hotPot+=1;
                            break;
                        case 9:
                            burger+=1;
                            break;
                        case 10:
                            dessert+=1;
                        // case 0: 
                        //     random+=1;
                        //     break;
                        default:
                            console.log(`There was an error with the fifth diner's third selection.`);
                    };

                    //Calculating sixth diner's choices
                    switch (choiceData.diner6choice1) {
                        case 1:
                            sushi+=3;
                            break;
                        case 2: 
                            pizza+=3;
                            break;
                        case 3:
                            salad+=3;
                            break;
                        case 4:
                            diner+=3;
                            break;
                        case 5:
                            burrito+=3;
                            break;
                        case 6:
                            thai+=3;
                            break;
                        case 7:
                            french+=3;
                            break;
                        case 8:
                            hotPot+=3;
                            break;
                        case 9:
                            burger+=3;
                            break;
                        case 10:
                            dessert+=3;
                        // case 0: 
                        //     random+=3;
                        //     break;
                        default:
                            console.log(`There was an error with the sixth diner's first selection.`);
                    };
                

                    switch (choiceData.diner6choice2) {
                        case 1:
                            sushi+=2;
                            break;
                        case 2: 
                            pizza+=2;
                            break;
                        case 3:
                            salad+=2;
                            break;
                        case 4:
                            diner+=2;
                            break;
                        case 5:
                            burrito+=2;
                            break;
                        case 6:
                            thai+=2;
                            break;
                        case 7:
                            french+=2;
                            break;
                        case 8:
                            hotPot+=2;
                            break;
                        case 9:
                            burger+=2;
                            break;
                        case 10:
                            dessert+=2;
                        // case 0: 
                        //     random+=2;
                        //     break;
                        default:
                            console.log(`There was an error with the sixth diner's second selection.`);
                    };

                    
                    switch (choiceData.diner6choice3) {
                        case 1:
                            sushi+=1;
                            break;
                        case 2: 
                            pizza+=1;
                            break;
                        case 3:
                            salad+=1;
                            break;
                        case 4:
                            diner+=1;
                            break;
                        case 5:
                            burrito+=1;
                            break;
                        case 6:
                            thai+=1;
                            break;
                        case 7:
                            french+=1;
                            break;
                        case 8:
                            hotPot+=1;
                            break;
                        case 9:
                            burger+=1;
                            break;
                        case 10:
                            dessert+=1;
                        // case 0: 
                        //     random+=1;
                        //     break;
                        default:
                            console.log(`There was an error with the sixth diner's third selection.`);
                    };

                    //Calculating seventh diner's choices
                    switch (choiceData.diner7choice1) {
                        case 1:
                            sushi+=3;
                            break;
                        case 2: 
                            pizza+=3;
                            break;
                        case 3:
                            salad+=3;
                            break;
                        case 4:
                            diner+=3;
                            break;
                        case 5:
                            burrito+=3;
                            break;
                        case 6:
                            thai+=3;
                            break;
                        case 7:
                            french+=3;
                            break;
                        case 8:
                            hotPot+=3;
                            break;
                        case 9:
                            burger+=3;
                            break;
                        case 10:
                            dessert+=3;
                        // case 0: 
                        //     random+=3;
                        //     break;
                        default:
                            console.log(`There was an error with the seventh diner's first selection.`);
                    };
                

                    switch (choiceData.diner7choice2) {
                        case 1:
                            sushi+=2;
                            break;
                        case 2: 
                            pizza+=2;
                            break;
                        case 3:
                            salad+=2;
                            break;
                        case 4:
                            diner+=2;
                            break;
                        case 5:
                            burrito+=2;
                            break;
                        case 6:
                            thai+=2;
                            break;
                        case 7:
                            french+=2;
                            break;
                        case 8:
                            hotPot+=2;
                            break;
                        case 9:
                            burger+=2;
                            break;
                        case 10:
                            dessert+=2;
                        // case 0: 
                        //     random+=2;
                        //     break;
                        default:
                            console.log(`There was an error with the seventh diner's second selection.`);
                    };

                    
                    switch (choiceData.diner7choice3) {
                        case 1:
                            sushi+=1;
                            break;
                        case 2: 
                            pizza+=1;
                            break;
                        case 3:
                            salad+=1;
                            break;
                        case 4:
                            diner+=1;
                            break;
                        case 5:
                            burrito+=1;
                            break;
                        case 6:
                            thai+=1;
                            break;
                        case 7:
                            french+=1;
                            break;
                        case 8:
                            hotPot+=1;
                            break;
                        case 9:
                            burger+=1;
                            break;
                        case 10:
                            dessert+=1;
                        // case 0: 
                        //     random+=1;
                        //     break;
                        default:
                            console.log(`There was an error with the seventh diner's third selection.`);
                    };

                    //Calculating eigth diner's choices
                    switch (choiceData.diner8choice1) {
                        case 1:
                            sushi+=3;
                            break;
                        case 2: 
                            pizza+=3;
                            break;
                        case 3:
                            salad+=3;
                            break;
                        case 4:
                            diner+=3;
                            break;
                        case 5:
                            burrito+=3;
                            break;
                        case 6:
                            thai+=3;
                            break;
                        case 7:
                            french+=3;
                            break;
                        case 8:
                            hotPot+=3;
                            break;
                        case 9:
                            burger+=3;
                            break;
                        case 10:
                            dessert+=3;
                        // case 0: 
                        //     random+=3;
                        //     break;
                        default:
                            console.log(`There was an error with the eigth diner's first selection.`);
                    };
                

                    switch (choiceData.diner8choice2) {
                        case 1:
                            sushi+=2;
                            break;
                        case 2: 
                            pizza+=2;
                            break;
                        case 3:
                            salad+=2;
                            break;
                        case 4:
                            diner+=2;
                            break;
                        case 5:
                            burrito+=2;
                            break;
                        case 6:
                            thai+=2;
                            break;
                        case 7:
                            french+=2;
                            break;
                        case 8:
                            hotPot+=2;
                            break;
                        case 9:
                            burger+=2;
                            break;
                        case 10:
                            dessert+=2;
                        // case 0: 
                        //     random+=2;
                        //     break;
                        default:
                            console.log(`There was an error with the eigth diner's second selection.`);
                    };

                    
                    switch (choiceData.diner8choice3) {
                        case 1:
                            sushi+=1;
                            break;
                        case 2: 
                            pizza+=1;
                            break;
                        case 3:
                            salad+=1;
                            break;
                        case 4:
                            diner+=1;
                            break;
                        case 5:
                            burrito+=1;
                            break;
                        case 6:
                            thai+=1;
                            break;
                        case 7:
                            french+=1;
                            break;
                        case 8:
                            hotPot+=1;
                            break;
                        case 9:
                            burger+=1;
                            break;
                        case 10:
                            dessert+=1;
                        // case 0: 
                        //     random+=1;
                        //     break;
                        default:
                            console.log(`There was an error with the eigth diner's third selection.`);
                    };

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

                    challenge = (resultArray) => {
                        return resultArray[Math.floor(Math.random() * resultArray.length)];
                    };

                    const challengeWinnder = challenge(resultArray);
                        res.render('pages/challenge', {
                            copyrightYear: siteData.year,
                            allRestaurants: allRestaurants,
                            challengeWinnder
                        });
                    }
            });
            }
        })
    },
    choice: (req, res) => {
        Restaurant.find({}, (error, allRestaurants) => {
            if (error) {
                return error;
            } else {
                Diners.findOne({dinerID: 1}, (error, dinersInfo) => {
                    if(error) {
                        return error;
                    } else {
                        res.render('pages/choice', {
                            copyrightYear: siteData.year,
                            diners: dinersInfo,
                            allRestaurants: allRestaurants
                        });
                    }
                })
            }
        })
    },
    choice_post: (req,res) => {
        Choice.deleteOne({choiceID: 1}, error => {
            if (error) {
                return error;
            } else {
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
            }
        })
       
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
                            switch (choiceData.diner1choice1) {
                                case 1:
                                    sushi+=3;
                                    break;
                                case 2: 
                                    pizza+=3;
                                    break;
                                case 3:
                                    salad+=3;
                                    break;
                                case 4:
                                    diner+=3;
                                    break;
                                case 5:
                                    burrito+=3;
                                    break;
                                case 6:
                                    thai+=3;
                                    break;
                                case 7:
                                    french+=3;
                                    break;
                                case 8:
                                    hotPot+=3;
                                    break;
                                case 9:
                                    burger+=3;
                                    break;
                                case 10:
                                    dessert+=3;
                                // case 0: 
                                //     random+=3;
                                //     break;
                                default:
                                    console.log(`There was an error with the first diner's first selection.`);
                            };
                        

                            switch (choiceData.diner1choice2) {
                                case 1:
                                    sushi+=2;
                                    break;
                                case 2: 
                                    pizza+=2;
                                    break;
                                case 3:
                                    salad+=2;
                                    break;
                                case 4:
                                    diner+=2;
                                    break;
                                case 5:
                                    burrito+=2;
                                    break;
                                case 6:
                                    thai+=2;
                                    break;
                                case 7:
                                    french+=2;
                                    break;
                                case 8:
                                    hotPot+=2;
                                    break;
                                case 9:
                                    burger+=2;
                                    break;
                                case 10:
                                    dessert+=2;
                                // case 0: 
                                //     random+=2;
                                //     break;
                                default:
                                    console.log(`There was an error with the first diner's second selection.`);
                            };

                            
                            switch (choiceData.diner1choice3) {
                                case 1:
                                    sushi+=1;
                                    break;
                                case 2: 
                                    pizza+=1;
                                    break;
                                case 3:
                                    salad+=1;
                                    break;
                                case 4:
                                    diner+=1;
                                    break;
                                case 5:
                                    burrito+=1;
                                    break;
                                case 6:
                                    thai+=1;
                                    break;
                                case 7:
                                    french+=1;
                                    break;
                                case 8:
                                    hotPot+=1;
                                    break;
                                case 9:
                                    burger+=1;
                                    break;
                                case 10:
                                    dessert+=1;
                                // case 0: 
                                //     random+=1;
                                //     break;
                                default:
                                    console.log(`There was an error with the first diner's third selection.`);
                            };

                            //Calculating second diner's choices
                            switch (choiceData.diner2choice1) {
                                case 1:
                                    sushi+=3;
                                    break;
                                case 2: 
                                    pizza+=3;
                                    break;
                                case 3:
                                    salad+=3;
                                    break;
                                case 4:
                                    diner+=3;
                                    break;
                                case 5:
                                    burrito+=3;
                                    break;
                                case 6:
                                    thai+=3;
                                    break;
                                case 7:
                                    french+=3;
                                    break;
                                case 8:
                                    hotPot+=3;
                                    break;
                                case 9:
                                    burger+=3;
                                    break;
                                case 10:
                                    dessert+=3;
                                // case 0: 
                                //     random+=3;
                                //     break;
                                default:
                                    console.log(`There was an error with the second diner's first selection.`);
                            };
                        

                            switch (choiceData.diner2choice2) {
                                case 1:
                                    sushi+=2;
                                    break;
                                case 2: 
                                    pizza+=2;
                                    break;
                                case 3:
                                    salad+=2;
                                    break;
                                case 4:
                                    diner+=2;
                                    break;
                                case 5:
                                    burrito+=2;
                                    break;
                                case 6:
                                    thai+=2;
                                    break;
                                case 7:
                                    french+=2;
                                    break;
                                case 8:
                                    hotPot+=2;
                                    break;
                                case 9:
                                    burger+=2;
                                    break;
                                case 10:
                                    dessert+=2;
                                // case 0: 
                                //     random+=2;
                                //     break;
                                default:
                                    console.log(`There was an error with the second diner's second selection.`);
                            };

                            
                            switch (choiceData.diner2choice3) {
                                case 1:
                                    sushi+=1;
                                    break;
                                case 2: 
                                    pizza+=1;
                                    break;
                                case 3:
                                    salad+=1;
                                    break;
                                case 4:
                                    diner+=1;
                                    break;
                                case 5:
                                    burrito+=1;
                                    break;
                                case 6:
                                    thai+=1;
                                    break;
                                case 7:
                                    french+=1;
                                    break;
                                case 8:
                                    hotPot+=1;
                                    break;
                                case 9:
                                    burger+=1;
                                    break;
                                case 10:
                                    dessert+=1;
                                // case 0: 
                                //     random+=1;
                                //     break;
                                default:
                                    console.log(`There was an error with the second diner's third selection.`);
                            };

                            //Calculating third diner's choices
                            switch (choiceData.diner3choice1) {
                                case 1:
                                    sushi+=3;
                                    break;
                                case 2: 
                                    pizza+=3;
                                    break;
                                case 3:
                                    salad+=3;
                                    break;
                                case 4:
                                    diner+=3;
                                    break;
                                case 5:
                                    burrito+=3;
                                    break;
                                case 6:
                                    thai+=3;
                                    break;
                                case 7:
                                    french+=3;
                                    break;
                                case 8:
                                    hotPot+=3;
                                    break;
                                case 9:
                                    burger+=3;
                                    break;
                                case 10:
                                    dessert+=3;
                                // case 0: 
                                //     random+=3;
                                //     break;
                                default:
                                    console.log(`There was an error with the third diner's first selection.`);
                            };
                        

                            switch (choiceData.diner3choice2) {
                                case 1:
                                    sushi+=2;
                                    break;
                                case 2: 
                                    pizza+=2;
                                    break;
                                case 3:
                                    salad+=2;
                                    break;
                                case 4:
                                    diner+=2;
                                    break;
                                case 5:
                                    burrito+=2;
                                    break;
                                case 6:
                                    thai+=2;
                                    break;
                                case 7:
                                    french+=2;
                                    break;
                                case 8:
                                    hotPot+=2;
                                    break;
                                case 9:
                                    burger+=2;
                                    break;
                                case 10:
                                    dessert+=2;
                                // case 0: 
                                //     random+=2;
                                //     break;
                                default:
                                    console.log(`There was an error with the third diner's second selection.`);
                            };

                            
                            switch (choiceData.diner3choice3) {
                                case 1:
                                    sushi+=1;
                                    break;
                                case 2: 
                                    pizza+=1;
                                    break;
                                case 3:
                                    salad+=1;
                                    break;
                                case 4:
                                    diner+=1;
                                    break;
                                case 5:
                                    burrito+=1;
                                    break;
                                case 6:
                                    thai+=1;
                                    break;
                                case 7:
                                    french+=1;
                                    break;
                                case 8:
                                    hotPot+=1;
                                    break;
                                case 9:
                                    burger+=1;
                                    break;
                                case 10:
                                    dessert+=1;
                                // case 0: 
                                //     random+=1;
                                //     break;
                                default:
                                    console.log(`There was an error with the third diner's third selection.`);
                            };

                            //Calculating fourth diner's choices
                            switch (choiceData.diner4choice1) {
                                case 1:
                                    sushi+=3;
                                    break;
                                case 2: 
                                    pizza+=3;
                                    break;
                                case 3:
                                    salad+=3;
                                    break;
                                case 4:
                                    diner+=3;
                                    break;
                                case 5:
                                    burrito+=3;
                                    break;
                                case 6:
                                    thai+=3;
                                    break;
                                case 7:
                                    french+=3;
                                    break;
                                case 8:
                                    hotPot+=3;
                                    break;
                                case 9:
                                    burger+=3;
                                    break;
                                case 10:
                                    dessert+=3;
                                // case 0: 
                                //     random+=3;
                                //     break;
                                default:
                                    console.log(`There was an error with the fourth diner's first selection.`);
                            };
                        

                            switch (choiceData.diner4choice2) {
                                case 1:
                                    sushi+=2;
                                    break;
                                case 2: 
                                    pizza+=2;
                                    break;
                                case 3:
                                    salad+=2;
                                    break;
                                case 4:
                                    diner+=2;
                                    break;
                                case 5:
                                    burrito+=2;
                                    break;
                                case 6:
                                    thai+=2;
                                    break;
                                case 7:
                                    french+=2;
                                    break;
                                case 8:
                                    hotPot+=2;
                                    break;
                                case 9:
                                    burger+=2;
                                    break;
                                case 10:
                                    dessert+=2;
                                // case 0: 
                                //     random+=2;
                                //     break;
                                default:
                                    console.log(`There was an error with the fourth diner's second selection.`);
                            };

                            
                            switch (choiceData.diner4choice3) {
                                case 1:
                                    sushi+=1;
                                    break;
                                case 2: 
                                    pizza+=1;
                                    break;
                                case 3:
                                    salad+=1;
                                    break;
                                case 4:
                                    diner+=1;
                                    break;
                                case 5:
                                    burrito+=1;
                                    break;
                                case 6:
                                    thai+=1;
                                    break;
                                case 7:
                                    french+=1;
                                    break;
                                case 8:
                                    hotPot+=1;
                                    break;
                                case 9:
                                    burger+=1;
                                    break;
                                case 10:
                                    dessert+=1;
                                // case 0: 
                                //     random+=1;
                                //     break;
                                default:
                                    console.log(`There was an error with the fourth diner's third selection.`);
                            };

                            // //Calculating fifth diner's choices
                            switch (choiceData.diner5choice1) {
                                case 1:
                                    sushi+=3;
                                    break;
                                case 2: 
                                    pizza+=3;
                                    break;
                                case 3:
                                    salad+=3;
                                    break;
                                case 4:
                                    diner+=3;
                                    break;
                                case 5:
                                    burrito+=3;
                                    break;
                                case 6:
                                    thai+=3;
                                    break;
                                case 7:
                                    french+=3;
                                    break;
                                case 8:
                                    hotPot+=3;
                                    break;
                                case 9:
                                    burger+=3;
                                    break;
                                case 10:
                                    dessert+=3;
                                // case 0: 
                                //     random+=3;
                                //     break;
                                default:
                                    console.log(`There was an error with the fifth diner's first selection.`);
                            };
                        

                            switch (choiceData.diner5choice2) {
                                case 1:
                                    sushi+=2;
                                    break;
                                case 2: 
                                    pizza+=2;
                                    break;
                                case 3:
                                    salad+=2;
                                    break;
                                case 4:
                                    diner+=2;
                                    break;
                                case 5:
                                    burrito+=2;
                                    break;
                                case 6:
                                    thai+=2;
                                    break;
                                case 7:
                                    french+=2;
                                    break;
                                case 8:
                                    hotPot+=2;
                                    break;
                                case 9:
                                    burger+=2;
                                    break;
                                case 10:
                                    dessert+=2;
                                // case 0: 
                                //     random+=2;
                                //     break;
                                default:
                                    console.log(`There was an error with the fifth diner's second selection.`);
                            };

                            
                            switch (choiceData.diner5choice3) {
                                case 1:
                                    sushi+=1;
                                    break;
                                case 2: 
                                    pizza+=1;
                                    break;
                                case 3:
                                    salad+=1;
                                    break;
                                case 4:
                                    diner+=1;
                                    break;
                                case 5:
                                    burrito+=1;
                                    break;
                                case 6:
                                    thai+=1;
                                    break;
                                case 7:
                                    french+=1;
                                    break;
                                case 8:
                                    hotPot+=1;
                                    break;
                                case 9:
                                    burger+=1;
                                    break;
                                case 10:
                                    dessert+=1;
                                // case 0: 
                                //     random+=1;
                                //     break;
                                default:
                                    console.log(`There was an error with the fifth diner's third selection.`);
                            };

                            //Calculating sixth diner's choices
                            switch (choiceData.diner6choice1) {
                                case 1:
                                    sushi+=3;
                                    break;
                                case 2: 
                                    pizza+=3;
                                    break;
                                case 3:
                                    salad+=3;
                                    break;
                                case 4:
                                    diner+=3;
                                    break;
                                case 5:
                                    burrito+=3;
                                    break;
                                case 6:
                                    thai+=3;
                                    break;
                                case 7:
                                    french+=3;
                                    break;
                                case 8:
                                    hotPot+=3;
                                    break;
                                case 9:
                                    burger+=3;
                                    break;
                                case 10:
                                    dessert+=3;
                                // case 0: 
                                //     random+=3;
                                //     break;
                                default:
                                    console.log(`There was an error with the sixth diner's first selection.`);
                            };
                        

                            switch (choiceData.diner6choice2) {
                                case 1:
                                    sushi+=2;
                                    break;
                                case 2: 
                                    pizza+=2;
                                    break;
                                case 3:
                                    salad+=2;
                                    break;
                                case 4:
                                    diner+=2;
                                    break;
                                case 5:
                                    burrito+=2;
                                    break;
                                case 6:
                                    thai+=2;
                                    break;
                                case 7:
                                    french+=2;
                                    break;
                                case 8:
                                    hotPot+=2;
                                    break;
                                case 9:
                                    burger+=2;
                                    break;
                                case 10:
                                    dessert+=2;
                                // case 0: 
                                //     random+=2;
                                //     break;
                                default:
                                    console.log(`There was an error with the sixth diner's second selection.`);
                            };

                            
                            switch (choiceData.diner6choice3) {
                                case 1:
                                    sushi+=1;
                                    break;
                                case 2: 
                                    pizza+=1;
                                    break;
                                case 3:
                                    salad+=1;
                                    break;
                                case 4:
                                    diner+=1;
                                    break;
                                case 5:
                                    burrito+=1;
                                    break;
                                case 6:
                                    thai+=1;
                                    break;
                                case 7:
                                    french+=1;
                                    break;
                                case 8:
                                    hotPot+=1;
                                    break;
                                case 9:
                                    burger+=1;
                                    break;
                                case 10:
                                    dessert+=1;
                                // case 0: 
                                //     random+=1;
                                //     break;
                                default:
                                    console.log(`There was an error with the sixth diner's third selection.`);
                            };

                            //Calculating seventh diner's choices
                            switch (choiceData.diner7choice1) {
                                case 1:
                                    sushi+=3;
                                    break;
                                case 2: 
                                    pizza+=3;
                                    break;
                                case 3:
                                    salad+=3;
                                    break;
                                case 4:
                                    diner+=3;
                                    break;
                                case 5:
                                    burrito+=3;
                                    break;
                                case 6:
                                    thai+=3;
                                    break;
                                case 7:
                                    french+=3;
                                    break;
                                case 8:
                                    hotPot+=3;
                                    break;
                                case 9:
                                    burger+=3;
                                    break;
                                case 10:
                                    dessert+=3;
                                // case 0: 
                                //     random+=3;
                                //     break;
                                default:
                                    console.log(`There was an error with the seventh diner's first selection.`);
                            };
                        

                            switch (choiceData.diner7choice2) {
                                case 1:
                                    sushi+=2;
                                    break;
                                case 2: 
                                    pizza+=2;
                                    break;
                                case 3:
                                    salad+=2;
                                    break;
                                case 4:
                                    diner+=2;
                                    break;
                                case 5:
                                    burrito+=2;
                                    break;
                                case 6:
                                    thai+=2;
                                    break;
                                case 7:
                                    french+=2;
                                    break;
                                case 8:
                                    hotPot+=2;
                                    break;
                                case 9:
                                    burger+=2;
                                    break;
                                case 10:
                                    dessert+=2;
                                // case 0: 
                                //     random+=2;
                                //     break;
                                default:
                                    console.log(`There was an error with the seventh diner's second selection.`);
                            };

                            
                            switch (choiceData.diner7choice3) {
                                case 1:
                                    sushi+=1;
                                    break;
                                case 2: 
                                    pizza+=1;
                                    break;
                                case 3:
                                    salad+=1;
                                    break;
                                case 4:
                                    diner+=1;
                                    break;
                                case 5:
                                    burrito+=1;
                                    break;
                                case 6:
                                    thai+=1;
                                    break;
                                case 7:
                                    french+=1;
                                    break;
                                case 8:
                                    hotPot+=1;
                                    break;
                                case 9:
                                    burger+=1;
                                    break;
                                case 10:
                                    dessert+=1;
                                // case 0: 
                                //     random+=1;
                                //     break;
                                default:
                                    console.log(`There was an error with the seventh diner's third selection.`);
                            };

                            //Calculating eigth diner's choices
                            switch (choiceData.diner8choice1) {
                                case 1:
                                    sushi+=3;
                                    break;
                                case 2: 
                                    pizza+=3;
                                    break;
                                case 3:
                                    salad+=3;
                                    break;
                                case 4:
                                    diner+=3;
                                    break;
                                case 5:
                                    burrito+=3;
                                    break;
                                case 6:
                                    thai+=3;
                                    break;
                                case 7:
                                    french+=3;
                                    break;
                                case 8:
                                    hotPot+=3;
                                    break;
                                case 9:
                                    burger+=3;
                                    break;
                                case 10:
                                    dessert+=3;
                                // case 0: 
                                //     random+=3;
                                //     break;
                                default:
                                    console.log(`There was an error with the eigth diner's first selection.`);
                            };
                        

                            switch (choiceData.diner8choice2) {
                                case 1:
                                    sushi+=2;
                                    break;
                                case 2: 
                                    pizza+=2;
                                    break;
                                case 3:
                                    salad+=2;
                                    break;
                                case 4:
                                    diner+=2;
                                    break;
                                case 5:
                                    burrito+=2;
                                    break;
                                case 6:
                                    thai+=2;
                                    break;
                                case 7:
                                    french+=2;
                                    break;
                                case 8:
                                    hotPot+=2;
                                    break;
                                case 9:
                                    burger+=2;
                                    break;
                                case 10:
                                    dessert+=2;
                                // case 0: 
                                //     random+=2;
                                //     break;
                                default:
                                    console.log(`There was an error with the eigth diner's second selection.`);
                            };

                            
                            switch (choiceData.diner8choice3) {
                                case 1:
                                    sushi+=1;
                                    break;
                                case 2: 
                                    pizza+=1;
                                    break;
                                case 3:
                                    salad+=1;
                                    break;
                                case 4:
                                    diner+=1;
                                    break;
                                case 5:
                                    burrito+=1;
                                    break;
                                case 6:
                                    thai+=1;
                                    break;
                                case 7:
                                    french+=1;
                                    break;
                                case 8:
                                    hotPot+=1;
                                    break;
                                case 9:
                                    burger+=1;
                                    break;
                                case 10:
                                    dessert+=1;
                                // case 0: 
                                //     random+=1;
                                //     break;
                                default:
                                    console.log(`There was an error with the eigth diner's third selection.`);
                            };

                        

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
        Diners.deleteOne({dinerID: 1}, error => {
            if (error) {
                return error;
            } else {
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
        
                res.redirect('/app/choice');
            }
        })
    },
    update: (req, res) => {
        const {_id } = req.params;
        const {name, cuisine, priceRange, emoji, dineIn, party6Plus, reservations, takeOut, distance, dietaryNeeds, minorityOO} = req.body;

        Restaurant.findByIdAndUpdate(_id, {$set: {
            name: name,
            cuisine: cuisine, 
            priceRange: priceRange, 
            emoji: emoji,
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
        const {name, cuisine, priceRange, emoji, dineIn, party6Plus, reservations, takeOut, distance, dietaryNeeds, minorityOO} = req.body;

        const newRestaurant = new Restaurant ({
            name: name,
            cuisine: cuisine, 
            priceRange: priceRange, 
            emoji: emoji,
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