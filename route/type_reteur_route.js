const express = require('express');
const router  = express.Router();
const type_recteur_controller =require('../controller/type_recteur_controller');
const authenticate =require('../MiddleWares/Authenticate')

router.get('/',type_recteur_controller.index);
router.post('/store',type_recteur_controller.store);
router.post('/show',type_recteur_controller.show);
router.post('/update',type_recteur_controller.update);
router.post('/destroy',type_recteur_controller.destroy);
module.exports =router