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
        const checkPassword = await bcrypt.compare(password,response.password)

        if (!checkPassword){
            return res.status(401).send("Invalid password try again")
        }
        const token = await jwt.sign({id:response.id,name:response.name,email:response.email,role:response.role},
            sercretKey,{expiresIn:"24hr"}
        )

        
        res.status(201).json(
            {
                success :true,
                message : `user successfully loged in`
            }
        )
       
       
    } catch (error) {
        console.log(`error is comming  from the Login ${error}`);
        res.status(500).json(error)
        
    }
     
    
}