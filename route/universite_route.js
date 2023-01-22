const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_universite')//import corresponding middleware()
const universite_controller =require('../controller/universite_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',universite_controller.index);
router.post('/show',universite_controller.show);
router.post('/store',upload.array('logo',6),universite_controller.store);
router.post('/update',upload.array('logo',6),universite_controller.update);//include methode for chaging images
router.post('/destroy',universite_controller.destroy);

module.exports =router