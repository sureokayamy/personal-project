const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

router.route('/')
    .get(adminCtrl.admin);

module.exports = router;