
export const Register = async(req,res)=>{
        const {name,email,password} = req.body;
             if(!name|!email|!password){
                res.status(400).send(`You have to enter ${name} ,${email} and ${password}`)
}
        try {
            res.status(200).send({name,email,password})
            
        } catch (error) {
            res.status(500).send(`your gatting error from register ${error}`)
        }
        }
       