const express = require('express');
const router = express.Router();
// const multer = require('multer');

const productsController = require('../app/controller/Productscontroller');
const upload = require('../app/middlewere/upload');
const createProductMiddlwere = require('../app/middlewere/createProducMiddlewere');
// const upload = multer();


router.get('/index', productsController.index);
router.get('/getproducbycategry', productsController.getproducbycategry);
router.post('/create', upload.single('file'), createProductMiddlwere, productsController.createProduct);
router.get('/:id', productsController.id);
router.get('/', productsController.paginate);
// router.get('/', productsController.pagination);


module.exports = router;