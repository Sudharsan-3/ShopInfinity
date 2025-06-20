import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const Login = async(req,res)=>{
   
   const {email,password} = req.body
    console.log(email,password)
    if(!email | ! password){
        return res.status(400).send(`You must send both email : ${email} and password : ${password}`)
    }
    try {
        res.status(200).json(`You successfully log in with ${email}`)
    } catch (error) {
        console.log(`error is comming  from the Login ${error}`);
        res.status(500).send(error)
        
    }
     
    
}