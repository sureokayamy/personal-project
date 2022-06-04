const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/site-controller');

router.route('/')
    .get(siteCtrl.index);
router.route('/index')
    .get(siteCtrl.index);
router.route('/about')
    .get(siteCtrl.about);
router.route('/contact')
    .get(siteCtrl.contact);
router.route('/login')
    .get(siteCtrl.login_get)
    .post(siteCtrl.login_post);
// router.route('/register')
//     .get(siteCtrl.register_get)
//     .post(siteCtrl.register_post);
router.route('/auth/google')
    .get(siteCtrl.google_get);
router.route('/auth/google/admin')
    .get(siteCtrl.google_redirect);
router.route('/logout')
    .get(siteCtrl.logout);

module.exports = router;