const AccountAdmin=require("../../models/account-admin.model")
const bcrypt =require('bcryptjs')
module.exports.login=(req, res) => { 
 res.render("admin/pages/login",{pageTitle:"login"}) // mặc định nó đẵ vào thư mục views
}
module.exports.register=(req, res) => { 
 res.render("admin/pages/register",{pageTitle:"register"}) // mặc định nó đẵ vào thư mục views
}
module.exports.registerInittial=(req,res)=>{
  res.render('admin/pages/register-initial',{pageTitle:"Đã Được phê duyệt ?"})
}
module.exports.registerPost = async (req, res) => {
  console.log("API REGISTER CHẠY");
  console.log(req.body);
  const { fullName, email, password } = req.body;

  const existAccount = await AccountAdmin.findOne({
    email: email
  });
  // ma hoa mat khau truoc khi vao csdl
  const salt = bcrypt.genSaltSync(10); // tao chuoi ngau nhien 10 ki tu 
  const hashedPassword = bcrypt.hashSync(password, salt);



  if(existAccount) {
    res.json({
      code: "error",
      message: "Email đã tồn tại trong hệ thống!"
    });
    return;
  }


  const newAccount = new AccountAdmin({
    fullName: fullName,
    email: email,
    password: hashedPassword,
    status: "initial"
  });

  await newAccount.save();

  res.json({
    code: "success",
    message: "Đăng ký tài khoản thành công!"
  });
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