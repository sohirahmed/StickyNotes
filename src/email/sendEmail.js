import nodemailer from 'nodemailer'
// import { emailHtml } from './emailHtml.js';
import jwt from 'jsonwebtoken'


export const sendEmails =async (email)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail", 
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        },
    });

    jwt.sign({email} ,process.env.EMAIL_TOKEN_SECRET ,async(err, token)=>{
        const info = await transporter.sendMail({
        from: `"Sticky Notes🤩" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Hello ✔",
        // html:emailHtml(token)
        html: `<a href="http://localhost:3000/verify/${token}">Click here to verify your email</a>`

    });
    console.log("Message sent:", info.messageId);

    })

}
