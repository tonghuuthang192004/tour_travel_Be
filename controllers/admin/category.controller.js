module.exports.list=(req, res) => { 
 res.render("admin/pages/category-list",{pageTitle:"category"} ) // mặc định nó đẵ vào thư mục views
}

module.exports.create=(req, res) => { 
 res.render("admin/pages/category-create",{pageTitle:"create"} ) // mặc định nó đẵ vào thư mục views
}
module.exports.edit=(req, res) => { 
 res.render("admin/pages/category-edit",{pageTitle:"Edit"} ) // mặc định nó đẵ vào thư mục views
}