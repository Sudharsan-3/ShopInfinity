import { PrismaClient } from "@prisma/client"
export const ReadProduct = async(req,res)=>{
    
    const prisma = new PrismaClient();

    try {
        const response = await prisma.Product.findMany()
        if(!response){
            res.status(204).json({
                success:true,
                message:"No data founded"
            })
        }
        res.status(200).json({
            success:true,
            message:"Product loaded successfully",
            response
        })
    res.send(response)
    } catch (error) {
        
    }
    
    
    console.log(response)
}