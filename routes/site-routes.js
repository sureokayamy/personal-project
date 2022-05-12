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

module.exports = router;