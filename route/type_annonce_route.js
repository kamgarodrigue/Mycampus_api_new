const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_annonce')//import corresponding middleware()
const type_annonce_controller =require('../controller/type_annonce_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',type_annonce_controller.index);
router.post('/show',type_annonce_controller.show);
router.post('/store',type_annonce_controller.store);
router.post('/update',type_annonce_controller.update);//include methode for chaging images
router.post('/destroy',type_annonce_controller.destroy);

module.exports =router