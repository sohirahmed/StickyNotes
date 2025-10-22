# 🗒️ StickyNotes App

A backend API built with **Node.js**, **Express**, and **MongoDB**, allowing users to securely create, edit, and manage personal notes — just like sticky notes on your desk 📝.

---

## 🚀 Features
- **User Registration & Login** with JWT Authentication  
- **Email Verification** using OTP code  
- **Add, Edit, Delete, and View Notes**  
- **Secure Password Hashing** with bcrypt  
- **Protected Routes** using JWT middleware  
- **Data Validation** with Joi  
- **Global Error Handling** for cleaner code  

---

## 🛠️ Technologies Used
- **Node.js**  
- **Express.js**  
- **MongoDB & Mongoose**  
- **JWT (JSON Web Token)**  
- **bcrypt**  
- **Joi**  
- **Nodemailer**  
- **dotenv**

---

## 📖 How It Works
1. A new user registers with their **email and password**.  
2. An **OTP code** is sent to the user’s email for verification.  
3. After verifying, the user can **log in** and manage their notes.  
4. Each user can **only access their own notes**.  

---
