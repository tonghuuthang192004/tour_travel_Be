module.exports.list=(req, res) => { 
 res.render("admin/pages/tour-list",{pageTitle:"Tour-list"} ) // mặc định nó đẵ vào thư mục views
}

module.exports.create=(req, res) => { 
 res.render("admin/pages/tour-create",{pageTitle:"create-tour"} ) // mặc định nó đẵ vào thư mục views
}
module.exports.edit=(req, res) => { 
 res.render("admin/pages/tour-edit",{pageTitle:"Edit-tour"} ) // mặc định nó đẵ vào thư mục views
}
module.exports.trash=(req, res) => { 
 res.render("admin/pages/tour-trash",{pageTitle:"trash-Tour"} ) // mặc định nó đẵ vào thư mục views
}