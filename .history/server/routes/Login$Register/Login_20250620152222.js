

export const Login = async(req,res)=>{
   
   const {email,password} = req.body
    console.log(email,password)
     
    res.state(200).json({email,password})
}