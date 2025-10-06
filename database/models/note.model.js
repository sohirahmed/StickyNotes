import mongoose, { model, Schema } from "mongoose";

const noteSchema = new Schema({
    title:String,
    description:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:{createdAt:true},
    versionKey: false
})

export const Note = model('Note', noteSchema)