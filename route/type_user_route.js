const express = require('express');
const router  = express.Router();
const type_user_controller =require('../controller/type_user_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',type_user_controller.index);
router.post('/store',type_user_controller.store);
router.post('/show',type_user_controller.show);
router.post('/update',type_user_controller.update);
router.post('/destroy',type_user_controller.destroy);
module.exports =router