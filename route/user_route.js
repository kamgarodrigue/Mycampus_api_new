const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_user')
const user_controller =require('../controller/user_controller');
const authenticate =require('../MiddleWares/Authenticate')
router.get('/',user_controller.index);
router.post('/register',upload.single('avatar'),user_controller.register);
router.post('/login',user_controller.login);
router.post('/show',user_controller.show);
router.post('/update',upload.single('avatar'),user_controller.update);
router.post('/destroy',user_controller.destroy);
module.exports =router
//,authent