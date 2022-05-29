const UserInfoError = require('passport-google-oauth20/lib/errors/userinfoerror');
const res = require('express/lib/response');
const passport = require('passport');
const siteData = require('../data/siteData');
const User = require('../models/userModel');

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
    },
    login_get: (req, res) => {
        res.render('pages/login', {
            copyrightYear: siteData.year
        });
    },
    login_post: (req, res) => {
        const {username, password} = req.body;
        const user = new UserInfoError({
            username: username,
            password: password
        });

        req.login(user, (err) => {
            if (err) {
            console.log(err);
            res.redirect('/login');
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin')
                });
            };
        });
    },
    register_get: (req, res) => {
        res.render('pages/register', {
            copyrightYear: siteData.year
        }
            )
    },
    register_post: (req, res) => {
        const user = req.body;
        User.register({username: user.username}, user.password, (err) => {
            if (err) {
                console.log(error);
                res.redirect('/register')
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin');
                });
            };
        });
    },
    google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email']}),
    google_redirect: [
        passport.authenticate('google', {failureRedirect: '/login'}), 
        function(req, res) {
        res.redirect('/admin');
    }
    ],
    logout: (req, res) => {
        req.logout(req.user, err => {
            if(err) return next(err);
        res.redirect('/');
    });
    }
};