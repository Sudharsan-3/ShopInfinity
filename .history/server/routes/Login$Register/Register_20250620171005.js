import { Prisma } from "@prisma/client";

export const Register = async(req,res)=>{
        const {name,email,password} = req.body;
             if(!name|!email|!password){
                res.status(400).send(`You have to enter ${name} ,${email} and ${password}`)
}
        try {
            await 
            res.status(200).send(`You successfully register with the user name : ${name} with email ${email}`)
            
        } catch (error) {
            res.status(500).send(`your gatting error from register ${error}`)
        }
        }
       