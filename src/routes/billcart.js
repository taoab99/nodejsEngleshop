const express = require('express');
const router = express.Router();

const Billcartcontroller = require('../app/controller/Billcartcontroller');

// router.get('/', Billcartcontroller.index);
router.post('/', Billcartcontroller.index);
module.exports = router