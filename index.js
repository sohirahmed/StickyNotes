import express from "express";
import userRouter from "./src/modules/user/user.routes.js";
import { dbConnection } from "./database/dbConnections.js";
import noteRouter from "./src/modules/note/note.routes.js";
import { User } from "./database/models/user.model.js";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

const app = express()
const port = 3000
dotenv.config({ quiet: true });

dbConnection()

app.use(express.json())

app.use('/auth', userRouter)
app.use('/notes', noteRouter)

app.get('/verify/:token',async(req,res,next)=>{
    jwt.verify(req.params.token , process.env.EMAIL_TOKEN_SECRET ,async (err , payload)=>{
        if(err) return res.json(err)
            await User.findOneAndUpdate({email:payload.email},{confirmEmail:true})
    res.json({message:"success" ,email:payload.email})
    })
})


app.get('/',(req,res,next)=>{
    res.send("Hello World")
})
app.use((req,res,next)=>{
    res.status(404).send("Not Found")
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})