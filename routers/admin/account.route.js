const router =require('express').Router();

const accountController=require('../../controllers/admin/account.controller')

router.get('/login', accountController.login)
router.get('/register', accountController.register)
router.get('/forgot-password', accountController.forgot)



module.exports=router