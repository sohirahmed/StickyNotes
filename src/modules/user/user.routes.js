import { Router } from "express";
import { signIn, signUp, verifyOTP,  } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";
const userRouter = Router();


userRouter.post('/signup',checkEmail, signUp)
userRouter.post('/signin', signIn)
userRouter.post('/verifyOTP', verifyOTP);

export default userRouter;