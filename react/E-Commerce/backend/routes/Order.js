const express= require('express');
const { createOrder } = require('../controllers/OrderController');
const router= express.Router();


router.route('/Order').post(createOrder);

module.exports=router;