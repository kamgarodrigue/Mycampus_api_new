const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_user')//import corresponding middleware()
const doyen_controller =require('../controller/doyen_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',doyen_controller.index);
router.post('/register',upload.single('avatar'),doyen_controller.register);
router.post('/login',doyen_controller.login);
router.get('/show',doyen_controller.show);
router.post('/update',upload.single('avatar'),doyen_controller.update);
router.post('/destroy',doyen_controller.destroy);

module.exports =router