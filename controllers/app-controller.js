const siteData = require('../data/siteData');
const Choice = require('../models/choiceModel');
const Restaurant = require('../models/restaurantModel');
const Diners = require('../models/dinersModel');

module.exports = {
    challenge: (req, res) => {
        res.render('pages/challenge', {
            copyrightYear: siteData.year,
            // alllll the restaurants for randomizing?
        });
    },
    choice: (req, res) => {
        const {_id} = req.params;
        Diners.find({_id: _id}, (error, dinersInfo) => {
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
        const {choice1, choice2, choice3, allergy, glutenFree, halal, kosher, vegan, vegetarian  } = req.body;
        const newChoice = new Choice ({
            choice1: choice1,
            choice2: choice2,
            choice3: choice3,
            allergy: allergy,
            glutenFree: glutenFree,
            halal: halal,
            kosher: kosher,
            vegan: vegan,
            vegetarian: vegetarian
        });

        newChoice.save();
        
        res.redirect('/app/result');
    },
    result: (req, res) => {
        Restaurant.find({}, (error, allRestaurants) => {
            if(error){
                return error;
            } else {
                const {_id} = req.params;
                Choice.findOne({_id: _id}, (error, choiceData) => {
                    if(error) {
                        return error;
                    } else {
                        const {_id} = req.params
                        Diners.findOne({_id: _id}, (error, dinersData) => {
                            if(error) {
                                return error;
                            } else {
                                res.render('pages/result', {
                                    copyrightYear: siteData.year,
                                    allRestaurants: allRestaurants,
                                    choiceData: choiceData,
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
            priceRange: priceRange
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