import Joi from "joi";

export const signupSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=(.*?[0-9]){1})(?=.*?[#?!@$%^&*-]).{5,}$"
      )
    )
    .messages({
      "string.pattern.base":
        "Password should be minimum length of 5, one Uppercase, one lowercase, a speical symbol, and number",
    }),
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phone: Joi.string().pattern(new RegExp("[0-9]{6,10}")).required(),
});
