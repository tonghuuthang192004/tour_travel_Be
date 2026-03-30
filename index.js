require('dns').setDefaultResultOrder('ipv4first');

const express = require('express') // nhúng freamwork vào 
const app = express() // gọi hàm express 
const port = 3000 // cổng 
const path =require('path');

require('dotenv').config(); // biến môi trường

// tours=>Tour
// products=>Product
// users=>User




const adminRoutes=require("./routers/admin/index.route");
// console.log("addiinnnn",adminRoutes);

const clientRoutes=require('./routers/client/index.route');

const { title } = require('process');
const { zstdCompress } = require('zlib');

app.set('views',path.join(__dirname,'views')); // thiết lập view 
app.set('view engine', 'pug') // chỉ định view enginner pug

// thiết lập chứ file tĩnh 
app.use(express.static(path.join(__dirname,'public'))) // làm như này để online ko bị lỗi
 


// get lấy ra tạo trang chủ 
// req gửi lên
// res trả về 


// kết nối database

const database=require('./config/database');
database.connect();


// thiep lap duong dan 
app.use("/admin",adminRoutes);

app.use("/",clientRoutes);


// khởi chạy dự án cổng 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})