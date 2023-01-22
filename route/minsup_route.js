const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_minsup')//import corresponding middleware()
const minsup_controller =require('../controller/minsup_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',minsup_controller.index);
router.post('/register',upload.single('avatar'),minsup_controller.register);
router.post('/login',minsup_controller.login);
router.post('/show',minsup_controller.show);
router.post('/update',upload.single('avatar'),minsup_controller.update);
router.post('/destroy',minsup_controller.destroy);

module.exports =router