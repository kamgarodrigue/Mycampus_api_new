const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_Lieu')//import corresponding middleware()
const lieu_controller =require('../controller/lieu_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',lieu_controller.index);
router.post('/show',lieu_controller.show);
router.post('/store',upload.array('image',6),lieu_controller.store);
router.post('/update',upload.array('image',6),lieu_controller.update);//include methode for chaging images
router.post('/destroy',lieu_controller.destroy);

module.exports =router