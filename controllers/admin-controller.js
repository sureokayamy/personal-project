const { req } = require('express');
const siteData = require('../data/siteData');
const Choice = require('../models/choiceModel');
const Restaurant = require('../models/restaurantModel');

module.exports = {
    admin: (req, res) => {
        if (req.isAuthenticated()) {
        Restaurant.find({}, (error, allRestaurants) => {
            if (error) {
                return error;
            } else {
                res.render('pages/admin', {
                    copyrightYear: siteData.year,
                    allRestaurants: allRestaurants
                });
            }
        });
            } else {
                res.redirect('/login');
            }
    },
   update: (req, res) => {
    if (req.isAuthenticated()) {
       const {_id} = req.params;
       Restaurant.findOne({_id: _id}, (error, restaurant) => {
           if(error) {
               return error;
           } else {
            res.render('pages/update', {
                copyrightYear: siteData.year,
                restaurant: restaurant
            });
           }
       });
        } else {
            res.redirect('/login');
        }
   },
   create: (req, res) => {
    if (req.isAuthenticated()) {
               res.render('pages/create', {
                copyrightYear: siteData.year,
               });
        } else {
            res.redirect('/login');
        }
    },
};