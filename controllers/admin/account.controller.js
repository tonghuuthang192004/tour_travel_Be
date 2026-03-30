module.exports.login=(req, res) => { 
 res.render("admin/pages/login",{pageTitle:"login"}) // mặc định nó đẵ vào thư mục views
}
module.exports.register=(req, res) => { 
 res.render("admin/pages/register",{pageTitle:"register"}) // mặc định nó đẵ vào thư mục views
}

module.exports.forgot=(req, res) => { 
 res.render("admin/pages/forgot",{pageTitle:"forgot"}) // mặc định nó đẵ vào thư mục views
}

module.exports.otpPassword=(req, res) => { 
 res.render("admin/pages/otp-password",{pageTitle:"otp-password"}) // mặc định nó đẵ vào thư mục views
}
module.exports.resetPassword=(req, res) => { 
 res.render("admin/pages/reset-password",{pageTitle:"reset-password"}) // mặc định nó đẵ vào thư mục views
}