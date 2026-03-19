const express = require('express') // nhúng freamwork vào 
const app = express() // gọi hàm express 
const port = 3000 // cổng 
const path =require('path');
const { title } = require('process');
app.set('views',path.join(__dirname,'./views')); // thiết lập view 
app.set('view engine', 'pug') // chỉ định view enginner pug

// get lấy ra tạo trang chủ 
// req gửi lên
// res trả về 
app.get('/', (req, res) => { 
 res.render("client/pages/home",{pageTitle:"Trang Chủ"}) // mặc định nó đẵ vào thư mục views
})
app.get('/tours', (req, res) => { 
  res.render('client/pages/tour',{pageTitle:"Danh sách tour"}) // mặc định nó đẵ vào thư mục views
})

// khởi chạy dự án cổng 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})