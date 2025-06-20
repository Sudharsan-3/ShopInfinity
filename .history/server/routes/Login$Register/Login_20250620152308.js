

export const Login = async(req,res)=>{
   
   const {email,password} = req.body
    console.log(email,password)
    try {
        
    } catch (error) {
        
    }
     
    res.status(200).json({email,password})
}