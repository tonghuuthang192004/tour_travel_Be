module.exports.registerPost = (req, res, next) => {
  const Joi = require("joi");

  const schema = Joi.object({
    fullName: Joi.string().min(5).max(30).messages({
      "string.empty": "Vui lòng nhập họ tên",
      // "any.required": "Họ tên bắt buộc",
      "string.min": "Họ tên ít nhất 5 ký tự",
      "string.max": "Họ tên tối đa 30 ký tự"
    }),

    email: Joi.string().email().required().messages({
      "string.empty": "Vui lòng nhập email",
      "string.email": "Email không hợp lệ",
      "any.required": "Email là bắt buộc"
    }),

    password: Joi.string()
      .min(8)
      .custom((value, helpers) => {

        if (!/[A-Z]/.test(value)) {
          return helpers.error("password.uppercase");
        }

        if (!/[a-z]/.test(value)) {
          return helpers.error("password.lowercase");
        }

        if (!/\d/.test(value)) {
          return helpers.error("password.number");
        }

        if (!/[@$!%*?&]/.test(value)) {
          return helpers.error("password.special");
        }

        return value;
      })
      .required()
      .messages({
        "string.min": "Mật khẩu ít nhất 8 ký tự",
        "string.empty": "Vui lòng nhập mật khẩu",
        "any.required": "Mật khẩu là bắt buộc",
        "password.uppercase": "Ít nhất 1 chữ hoa",
        "password.lowercase": "Ít nhất 1 chữ thường",
        "password.number": "Ít nhất 1 số",
        "password.special": "Ít nhất 1 kí tự đặc biệt"
      })
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.json({
      code: "error",
      message: error.details[0].message
    });
  }

  next();
};