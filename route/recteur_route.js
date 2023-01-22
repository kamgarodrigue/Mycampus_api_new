const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_recteur')//import corresponding middleware()
const recteur_controller =require('../controller/recteur_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',recteur_controller.index);
router.post('/register',upload.single('avatar'),recteur_controller.register);
router.post('/login',recteur_controller.login);
router.post('/show',recteur_controller.show);
router.post('/update',upload.single('avatar'),recteur_controller.update);
router.post('/destroy',recteur_controller.destroy);

module.exports =router