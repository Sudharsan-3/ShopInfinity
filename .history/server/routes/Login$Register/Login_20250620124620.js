

export const Login = async(req,res)=>{
    const [email,password] =req.body
    res.send("h")
    console.log(email,password)
    
}