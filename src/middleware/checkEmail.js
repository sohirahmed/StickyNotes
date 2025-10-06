import { User } from "../../database/models/user.model.js"
import bcrypt from "bcrypt"

export const checkEmail = async(req,res,next)=>{
    let userExists = await User.findOne({email:req.body.email})
    if(userExists){
        return next(new AppError("User already exists", 409))
    }
    let hash = bcrypt.hashSync(req.body.password , 8)
    req.body.password = hash

    next()
}
