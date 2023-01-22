const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_faculte')//import corresponding middleware()
const faculte_controller =require('../controller/faculte_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',faculte_controller.index);
router.post('/show',faculte_controller.show);
router.post('/store',upload.array('image',6),faculte_controller.store);
router.post('/update',upload.array('image',6),faculte_controller.update);//include methode for chaging images
router.post('/destroy',faculte_controller.destroy);

module.exports =router