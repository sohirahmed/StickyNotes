import { Note } from "../../../database/models/note.model.js"


// export const getAllNotes = async(req,res,next)=>{
//     let note = await Note.find().populate('createdBy')
//     res.status(201).json({message:"success", note})
// }

export const getNotes = async(req,res,next)=>{
    let note = await Note.find({createdBy:req.user.userId}).populate('createdBy')
    res.status(201).json({message:"success", note})
}


export const addNote = async(req,res,next)=>{
    let note = await Note.insertMany(req.body)
    res.status(201).json({message:"Note created successfully", note})
}

export const updateNote = async(req,res,next)=>{
    let note = await Note.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(201).json({message:"Note updated successfully", note})
}

export const deleteNote = async(req,res,next)=>{
    let note = await Note.findByIdAndDelete(req.params.id)
    if(!note) return res.status(404).json({message:"Note not found"})
    res.status(201).json({message:"Note deleted successfully"})
}