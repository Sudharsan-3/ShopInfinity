import { PrismaClient } from "@prisma/client"
export const ReadProduct = async(req,res)=>{
    
    const prisma = new PrismaClient();

    try {
        const response = await prisma.Product.findMany()
        if(re)
    res.send(response)
    } catch (error) {
        
    }
    
    
    console.log(response)
}