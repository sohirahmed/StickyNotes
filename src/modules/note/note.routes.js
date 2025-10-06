import { Router } from "express";
import { addNote, deleteNote,getNotes, updateNote } from "./note.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";

const noteRouter = Router()

noteRouter.use(verifyToken)

noteRouter.get('/', getNotes)
noteRouter.post('/add', addNote)
noteRouter.put('/update/:id' , updateNote)
noteRouter.delete('/delete/:id', deleteNote)


export default noteRouter