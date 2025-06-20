

export const Login = async(req,res)=>{
    const [email,password] =req.body
    res.send(email)
    console.log(email,password)
    
}