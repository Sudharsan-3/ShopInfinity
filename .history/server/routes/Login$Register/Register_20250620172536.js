import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const Register = async(req,res)=>{
        const {name,email,password,role} = req.body;
             if(!name|!email|!password|!role){
                res.status(400).send(`You have to enter ${name} ,${email} , ${role} and ${password}`)
}
        try {
            await prisma.user.create({
                data:{userName:name,
                email,
                password(password),
                role}
                
            })
            
            res.status(200).send(`You successfully register with the user name : ${name} with email ${email}`)
            
        } catch (error) {
            res.status(500).send(`your gatting error from register ${error}`)
        }
        }
       