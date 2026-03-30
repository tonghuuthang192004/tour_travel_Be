module.exports.login=(req, res) => { 
 res.render("admin/pages/login",{pageTitle:"login"}) // mặc định nó đẵ vào thư mục views
}
module.exports.register=(req, res) => { 
 res.render("admin/pages/register",{pageTitle:"register"}) // mặc định nó đẵ vào thư mục views
}