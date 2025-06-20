

export const Login = async(req,res)=>{
    const {email,password}=req.body ;
    console.log(email,password)
    res.status(200)
   
    
}