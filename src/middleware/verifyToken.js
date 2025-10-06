import jwt from 'jsonwebtoken'

export const verifyToken = async(req,res,next)=>{
    let [key , token] = req.headers.token.split(' ')
    if(key=="bearer"){
            jwt.verify(token, process.env.JWT_SECRET ,async(err,decoded)=>{
        if(err) return res.status(401).json({message:"invalid token" , err})
            req.user = decoded
        next()
    })
    }


}