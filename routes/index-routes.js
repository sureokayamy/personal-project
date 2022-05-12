const express = require('express');
const siteRouter = require('./site-routes');
const adminRouter = require('./admin-routes');
const appRouter = require('./app-routes');
const router = express.Router();

router.use('/', siteRouter);
router.use('/admin', adminRouter);
router.use('/app', appRouter);

module.exports = router;