const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_user')//import corresponding middleware()
const lieu_controller =require('../controller/lieu_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',lieu_controller.index);
router.get('/show',lieu_controller.show);
router.post('/store',lieu_controller.store);
router.post('/update',lieu_controller.update);//include methode for chaging images
router.post('/destroy',lieu_controller.destroy);

module.exports =router