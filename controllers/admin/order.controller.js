module.exports.list =(req,res)=>{
    res.render('admin/pages/order-list',{pagetitle:'Quản lý Đơn Hàng'})
}
module.exports.edit =(req,res)=>{
    res.render('admin/pages/order-edit',{pagetitle:'Quản Lý Đơn Hàng'})
}