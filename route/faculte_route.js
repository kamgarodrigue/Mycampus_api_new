const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_user')//import corresponding middleware()
const faculte_controller =require('../controller/faculte_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',faculte_controller.index);
router.get('/show',faculte_controller.show);
router.post('/store',faculte_controller.store);
router.post('/update',faculte_controller.update);//include methode for chaging images
router.post('/destroy',faculte_controller.destroy);

module.exports =router