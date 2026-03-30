const router =require('express').Router();
const accountRoutes=require("./account.route")
const dashboardRoute=require("./dashboard.route");
const categorydRoute=require("./category.route");
const tourRoute=require('./tour.route');

router.use('/account',accountRoutes )

router.use('/dashboard',dashboardRoute )
router.use('/category',categorydRoute )


router.use('/tour',tourRoute);
module.exports=router