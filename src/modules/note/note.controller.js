import { Note } from "../../../database/models/note.model.js"
import { catchError } from "../../middleware/catchError.js"


export const getNotes = catchError(async(req,res,next)=>{
    let note = await Note.find({createdBy:req.user.userId}).populate('createdBy')
    res.status(201).json({message:"success", note})
})


export const addNote = catchError(async(req,res,next)=>{
    let note = await Note.insertMany(req.body)
    res.status(201).json({message:"Note created successfully", note})
})

export const updateNote = catchError(async(req,res,next)=>{
    let note = await Note.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(201).json({message:"Note updated successfully" , note})
})

export const deleteNote = catchError(async(req,res,next)=>{
    let note = await Note.findByIdAndDelete(req.params.id)
    if(!note) return next (new AppError("Note not found", 404))
    res.status(201).json({message:"Note deleted successfully"})
})