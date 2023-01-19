const express = require('express');
const router  = express.Router();
const type_universite_controller =require('../controller/type_universite_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',type_universite_controller.index);
router.post('/store',type_universite_controller.store);
router.get('/show',type_universite_controller.show);
router.post('/update',type_universite_controller.update);
router.post('/destroy',type_universite_controller.destroy);
module.exports =router