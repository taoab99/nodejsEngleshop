const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/Sitecontroller');


router.get('/', siteController.index);


module.exports = router;