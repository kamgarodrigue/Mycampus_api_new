const express = require('express');
const router  = express.Router();
const type_lieu_controller =require('../controller/type_lieu_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',type_lieu_controller.index);
router.post('/store',type_lieu_controller.store);
router.post('/show',type_lieu_controller.show);
router.post('/update',type_lieu_controller.update);
router.post('/destroy',type_lieu_controller.destroy);
module.exports =router