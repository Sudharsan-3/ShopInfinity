
export const Register = async(req,res)=>{
        const {userName,email,password} = req.body 
             if(!userName|email|password){
                res.status(400).send(`You have to enter ${userName} ,${email} and &{password}`)
        }
        try {
            res.s
            
        } catch (error) {
            
        }
        }
       