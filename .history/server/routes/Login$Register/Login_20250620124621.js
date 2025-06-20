

export const Login = async(req,res)=>{
    const [email,password] =req.body
    res.send("hi")
    console.log(email,password)
    
}