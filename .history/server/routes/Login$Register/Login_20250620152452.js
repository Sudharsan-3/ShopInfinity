

export const Login = async(req,res)=>{
   
   const {email,password} = req.body
    console.log(email,password)
    if(!email | ! password){
        return res.status(400).send(`You must send both email : ${email} and password `)
    }
    try {
        res.status(200).json({email,password})
    } catch (error) {
        
    }
     
    
}