const router =require('express').Router();
const registerValidate=require('../../validates/admin/account.validate')
const accountController=require('../../controllers/admin/account.controller')

router.get('/login', accountController.login)
router.get('/register', accountController.register)

router.post('/register',registerValidate.registerPost , accountController.registerPost)
router.get('/register-initial', accountController.registerInittial)

router.get('/forgot-password', accountController.forgot)
router.get('/otp-password', accountController.otpPassword)
router.get('/reset-password', accountController.resetPassword)




module.exports=router