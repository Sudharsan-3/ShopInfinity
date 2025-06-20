

export const Login = async(req,res)=>{
    const [email,password] =req.body
    res.status(200)
    console.log(email,password)
    
}