require('dns').setDefaultResultOrder('ipv4first');

const express = require('express') // nhúng freamwork vào 
const app = express() // gọi hàm express 
const port = 3000 // cổng 
const path =require('path');

require('dotenv').config(); // biến môi trường

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE
)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));
// tours=>Tour
// products=>Product
// users=>User


const Tour=require('./models/tour.model');

const { title } = require('process');
const { zstdCompress } = require('zlib');

app.set('views',path.join(__dirname,'views')); // thiết lập view 
app.set('view engine', 'pug') // chỉ định view enginner pug

// thiết lập chứ file tĩnh 
app.use(express.static(path.join(__dirname,'public'))) // làm như này để online ko bị lỗi
 


// get lấy ra tạo trang chủ 
// req gửi lên
// res trả về 

const tourController=require('./controllers/client/tour.controller')
const homeController=require('./controllers/client/home.controller')

app.get('/', homeController.home)
app.get('/tours', tourController.tour)



// khởi chạy dự án cổng 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})