import { Router } from "express";
import { addNote, deleteNote,getNotes, updateNote } from "./note.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import { validate } from "../../middleware/validate.js";
import { addNoteVal, updateNoteVal } from "./note.validation.js";

const noteRouter = Router()

noteRouter.use(verifyToken)

noteRouter.get('/', getNotes)
noteRouter.post('/add',validate(addNoteVal), addNote)
noteRouter.put('/update/:id' ,validate(updateNoteVal), updateNote)
noteRouter.delete('/delete/:id', deleteNote)


export default noteRouter