

export const Login = async(req,res)=>{
   
   const {email,password} = req.body
    console.log(email,password)
    if(!email | ! password){
        res.se
    }
    try {
        res.status(200).json({email,password})
    } catch (error) {
        
    }
     
    
}