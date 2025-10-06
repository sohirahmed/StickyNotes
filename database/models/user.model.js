import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    confirmEmail:{
        type: Boolean,
        default: false
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    otpCode:String,
    otpExpire:Date,
},{
    timestamps:{
        createdAt: true,
        updatedAt:false
    },
    versionKey: false
})

export const User = model('User', userSchema)