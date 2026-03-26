const Tour=require('../../models/tour.model');

module.exports.tour= async (req, res)  => { 
  var tourList =  await Tour.find({});

  console.log(tourList);

  res.render('client/pages/tour',{pageTitle:"Danh sách tour",
    tourList:tourList // chạy sang giao dien view
  }) // mặc định nó đẵ vào thư mục views
}