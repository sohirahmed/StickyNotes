import { User } from "../../../database/models/user.model.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
// import { sendEmails } from "../../email/sendEmail.js"
import { sendOTP } from "../../email/sendOTP.js"

export const signUp = async(req,res,next)=>{
    let user = await User.create(req.body)
    user.password = undefined
    await sendOTP(req.body.email);

    // sendEmails(req.body.email)
    res.status(201).json({message:"User created successfully", user})
}

export const signIn = async(req,res,next)=>{
    let user = await User.findOne({email:req.body.email})
    // let match = bcrypt.compareSync(req.body.password , user.password)
    if(!user || !bcrypt.compareSync(req.body.password , user.password)){
        res.status(401).json({message:"incorrect password or email."})
    }else{
        jwt.sign({userId:user._id , name:user.name , role:user.role},
            process.env.JWT_SECRET,(err,token)=>{
                res.status(201).json({message:"User logged in successfully", token})
        })
    }
}

export const verifyEmail = async (req, res, next) => {
    const { token } = req.params;
    jwt.verify(token, process.env.EMAIL_TOKEN_SECRET, async (err, payload) => {
        if (err) return res.status(400).json({ message: "Invalid or expired token" });
        await User.findOneAndUpdate(
            { email: payload.email },
            { confirmEmail: true }
        );
        return res.status(200).json({ message: "Email verified successfully", email: payload.email });
    });
}


export const verifyOTP = async(req,res,next)=>{
    const {email , otp} = req.body
    const user = await User.findOne({email})
    if(!user) 
        return res.status(401).json({message:"user not found"})
    if(user.otpCode !== otp) 
        return res.status(401).json({message:"Invalid OTP"})
    if (user.otpExpire < Date.now())
        return res.status(400).json({ message: "OTP expired" });
    user.confirmEmail = true;
    user.otpCode = null;
    user.otpExpire = null;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });

}