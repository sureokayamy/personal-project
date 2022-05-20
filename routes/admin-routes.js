const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

router.route('/')
    .get(adminCtrl.admin);
router.route('/update/:_id')
    .get(adminCtrl.update);
router.route('/create')
    .get(adminCtrl.create);
    



module.exports = router;