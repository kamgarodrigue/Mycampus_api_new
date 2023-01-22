const express = require('express');
const router  = express.Router();
const upload =require('../MiddleWares/upload_chef_departement')//import corresponding middleware()
const chef_departement_controller =require('../controller/chef_departement_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',chef_departement_controller.index);
router.post('/register',upload.single('avatar'),chef_departement_controller.register);
router.post('/login',chef_departement_controller.login);
router.post('/show',chef_departement_controller.show);
router.post('/update',upload.single('avatar'),chef_departement_controller.update);
router.post('/destroy',chef_departement_controller.destroy);
module.exports =router