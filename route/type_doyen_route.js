const express = require('express');
const router  = express.Router();
const type_doyen_controller =require('../controller/type_doyen_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',type_doyen_controller.index);
router.post('/register',type_doyen_controller.store);
router.get('/show',type_doyen_controller.show);
router.post('/update',type_doyen_controller.update);
router.post('/destroy',type_doyen_controller.destroy);
module.exports =router