require('dns').setDefaultResultOrder('ipv4first');

const express = require('express') // nhúng freamwork vào 
const app = express() // gọi hàm express 
const port = 3000 // cổng 
const path =require('path');

const mongoose = require("mongoose");

mongoose.connect(
"mongodb://huuthang192004_db_user:bsUczfs1LKeWMrk1@ac-8e1qzqp-shard-00-00.6ttyt3c.mongodb.net:27017,ac-8e1qzqp-shard-00-01.6ttyt3c.mongodb.net:27017,ac-8e1qzqp-shard-00-02.6ttyt3c.mongodb.net:27017/tour-managerment?ssl=true&replicaSet=atlas-5mqbsc-shard-0&authSource=admin&retryWrites=true&w=majority"
)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));
// tours=>Tour
// products=>Product
// users=>User
const Tour = mongoose.model('Tour', { 
  name: String ,vehicle:String});


const { title } = require('process');
const { zstdCompress } = require('zlib');
app.set('views',path.join(__dirname,'views')); // thiết lập view 
app.set('view engine', 'pug') // chỉ định view enginner pug

// thiết lập chứ file tĩnh 
app.use(express.static(path.join(__dirname,'public'))) // làm như này để online ko bị lỗi
 


// get lấy ra tạo trang chủ 
// req gửi lên
// res trả về 
app.get('/', (req, res) => { 
 res.render("client/pages/home",{pageTitle:"Trang Chủ"}) // mặc định nó đẵ vào thư mục views
})
app.get('/tours',  async (req, res)  => { 
  var tourList =  await Tour.find({});

  console.log(tourList);

  res.render('client/pages/tour',{pageTitle:"Danh sách tour",
    tourList:tourList // chạy sang giao dien view
  }) // mặc định nó đẵ vào thư mục views
})



// khởi chạy dự án cổng 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})