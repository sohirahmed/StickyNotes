import { Router } from "express";
import { signIn, signUp, verifyEmail, verifyOTP,  } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";
import { validate } from "../../middleware/validate.js";
import { signUpVal, sinInVal } from "./user.validation.js";
const userRouter = Router();


userRouter.post('/signup',validate(signUpVal),checkEmail, signUp)
userRouter.post('/signin',validate(sinInVal), signIn)
userRouter.get('/verify/:token', verifyEmail);
userRouter.post('/verifyOTP', verifyOTP);

export default userRouter;