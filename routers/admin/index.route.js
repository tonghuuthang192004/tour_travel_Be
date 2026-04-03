const router =require('express').Router();
const accountRoutes=require("./account.route")
const dashboardRoute=require("./dashboard.route");
const categorydRoute=require("./category.route");
const tourRoute=require('./tour.route');
const orderRoute=require('./order.route');
const userRoute=require('./user.route');
const contactRoute=require('./contact.route');
const settingRoute=require('./setting.route');

router.use('/setting',settingRoute);
router.use('/user',userRoute);
router.use('contact',contactRoute);
router.use('/order',orderRoute);
router.use('/account',accountRoutes )
router.use('/dashboard',dashboardRoute )
router.use('/category',categorydRoute )
router.use('/tour',tourRoute);




module.exports=router