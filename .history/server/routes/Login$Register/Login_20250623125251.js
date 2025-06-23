import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

dotenv.config();

const prisma = new PrismaClient();
const sercretKey = process.env.SECRETTOKEN

export const Login = async(req,res)=>{
   
   const {email,password} = req.body
    console.log(email,password)
    if(!email || ! password){
        return res.status(400).send(`You must send both email : ${email} and password : ${password}`)
    }
    try {
        const response = await prisma.user.findUnique({
            where:{email}
        })
        console.log(response,"response")
        if(!response){
            res.status(404).json(`User not found with the email id : ${email}`)
        }   
        const 


        if(response.password === (Number(password))){
        res.status(200).json(`You successfully log in with ${email}`)
        }else{
            res.status(401).json(`The password is wrong try again , email : ${email} password :${password} `)
        }
       
    } catch (error) {
        console.log(`error is comming  from the Login ${error}`);
        res.status(500).json(error)
        
    }
     
    
}