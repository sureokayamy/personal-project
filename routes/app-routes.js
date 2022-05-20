const express = require('express');
const router = express.Router();
const appCtrl = require('../controllers/app-controller');

router.route('/')
    .post(appCtrl.app_post);
router.route('/challenge')
    .get(appCtrl.challenge);
router.route('/choice')
    .get(appCtrl.choice)
    .post(appCtrl.choice_post);
router.route('/result')
    .get(appCtrl.result);
router.route('/:_id')
    .put(appCtrl.update)
    .post(appCtrl.create)
    .delete(appCtrl.delete);

 module.exports = router;