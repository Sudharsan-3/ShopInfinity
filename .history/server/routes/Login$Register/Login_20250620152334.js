

export const Login = async(req,res)=>{
   
   const {email,password} = req.body
    console.log(email,password)
    if()
    try {
        res.status(200).json({email,password})
    } catch (error) {
        
    }
     
    
}