
const mongoose = require("mongoose");

module.exports.connect = async ()=>{
    try {
       await mongoose.connect(process.env.DATABASE)
        console.log('kết nối database thành công')
        
    }catch(error)
    {
        console.log('kết nối database thất bại');
        console.log(error);

    }

}

