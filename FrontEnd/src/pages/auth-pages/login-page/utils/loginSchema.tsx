import Joi from "joi";

export const loginSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(5).required(),
});
