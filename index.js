const express = require('express') // nhúng freamwork vào 
const app = express() // gọi hàm express 
const port = 3000 // cổng 

// get lấy ra tạo trang chủ 
// req gửi lên
// res trả về 
app.get('/', (req, res) => { 
  res.send('123')
})


// khởi chạy dự án cổng 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})