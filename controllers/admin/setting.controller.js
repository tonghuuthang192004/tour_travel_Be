module.exports.list=(req, res) => { 
 res.render("admin/pages/setting-list",{pagetitle:"setting-list"} ) // mặc định nó đẵ vào thư mục views
}

module.exports.website=(req, res) => { 
 res.render("admin/pages/setting-website-info",{pagetitle:"setting-list"} ) // mặc định nó đẵ vào thư mục views
}