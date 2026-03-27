const router =require('express').Router();

const tourController=require('../../controllers/client/tour.controller')

router.get('/', tourController.tour)

module.exports=router