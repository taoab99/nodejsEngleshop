const express = require('express');
const router = express.Router();
const Logginmiddlewere = require('../app/middlewere/logginMiddlewere');

const accountcontroller = require('../app/controller/Accountcontroller');

router.post('/deleteItemcart', accountcontroller.deleteItemcart);
router.get('/getaccount', accountcontroller.getaccount);
router.get('/getallcart', accountcontroller.getallcart);
router.post('/create', accountcontroller.create);
router.post('/loggin', accountcontroller.loggin);
router.post('/addtocart', accountcontroller.addtocart);




module.exports = router;